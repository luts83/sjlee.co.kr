import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { projects } from '../data/projects';
import { Project } from '../types/project';
import { Helmet } from 'react-helmet-async';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showSwipeGuide, setShowSwipeGuide] = useState(true);

  const project = projects.find(p => p.id === Number(id)) as Project | undefined;

  // ✅ 연도 기준 내림차순 정렬된 배열 사용
  const sortedProjects = useMemo(() => 
    [...projects]
      .filter((p) => !p.isStudent)
      .sort((a, b) => Number(b.date) - Number(a.date))
  , [projects]);

  const currentIndex = sortedProjects.findIndex(p => p.id === Number(id));
  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  // 이미지 배열 생성
  const allImages = useMemo(() => {
    if (!project) return [];
    
    // ID 16번 프로젝트는 메인 이미지만 보여줌
    if (project.id === 16) {
      return [project.image];
    }

    if (project.additionalImages) {
      // 디자인 프로젝트인 경우 (id가 1-11인 경우) 첫 번째 이미지를 첫 번째로, 메인 이미지를 두 번째로 배치
      if (project.id >= 1 && project.id <= 11) {
        const [first, ...rest] = project.additionalImages;
        const images = [];
        if (first) images.push(first);
        images.push(project.image);
        if (rest.length > 0) images.push(...rest);
        return images;
      } else {
        // 다른 프로젝트들은 메인 이미지를 첫 번째로, 나머지는 순서대로
        return [project.image, ...project.additionalImages];
      }
    }
    return [project.image];
  }, [project]);

  // 스와이프 핸들러
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true
  });

  // 스와이프 가이드 메시지 3초 후 숨기기
  useEffect(() => {
    if (isOpen && showSwipeGuide) {
      const timer = setTimeout(() => {
        setShowSwipeGuide(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, showSwipeGuide]);

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    if (project && project.additionalImages) {
      setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
    }
  }, [project, allImages]);

  const goToNext = useCallback(() => {
    if (project && project.additionalImages) {
      setCurrentImageIndex(prev => (prev + 1) % allImages.length);
    }
  }, [project, allImages]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [closeLightbox, goToPrevious, goToNext]);

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | Sangjin Lee</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Sangjin Lee`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://sjlee.co.kr${project.image}`} />
        <meta property="og:url" content={`https://sjlee.co.kr/portfolio/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Back Button */}
          <button
            onClick={() => navigate('/portfolio')}
            className="mb-10 text-gray-600 hover:text-gray-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>

          {/* Title & Meta */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
            <h1 className="text-4xl font-light tracking-tight text-gray-800 mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>{project.date}</span>
              <span>•</span>
              <span>{project.location}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-lg text-gray-700 leading-relaxed mb-12"
          >
            {project.description}
          </motion.p>

          {/* Image Gallery */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-10 mb-12">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <LazyLoadImage
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  effect="blur"
                  className="w-full h-auto rounded-lg shadow-lg object-contain group-hover:opacity-90 transition-opacity duration-300"
                  placeholderSrc={image}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                    Click to enlarge
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-12">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Long-form Description */}
          {project.descriptionText && (
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="mb-16">
              <h2 className="text-2xl font-light text-gray-800 mb-6">Details</h2>
              <div
                className="prose prose-gray max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: project.descriptionText }}
              />
            </motion.div>
          )}

          {/* Navigation - ID 16번 프로젝트는 네비게이션 숨김 */}
          {project.id !== 16 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex justify-between items-center mt-16 pt-10 border-t border-gray-200"
            >
              {prevProject ? (
                <button
                  onClick={() =>
                    navigate(
                      prevProject.isComputer
                        ? `/portfolio/code/${prevProject.id}`
                        : `/portfolio/arch-pro/${prevProject.id}`
                    )
                  }
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
              ) : <div />}
              {nextProject ? (
                <button
                  onClick={() =>
                    navigate(
                      nextProject.isComputer
                        ? `/portfolio/code/${nextProject.id}`
                        : `/portfolio/arch-pro/${nextProject.id}`
                    )
                  }
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : <div />}
            </motion.div>
          )}

          {/* Image Modal */}
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={closeLightbox}
            >
              <div 
                className="relative max-w-6xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
                {...swipeHandlers}
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 hidden md:block"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 hidden md:block"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="relative">
                  <LazyLoadImage
                    src={allImages[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[90vh] object-contain"
                    effect="blur"
                    placeholderSrc={allImages[currentImageIndex]}
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    {currentImageIndex + 1} / {allImages.length}
                  </div>
                  {/* 모바일에서만 표시되는 스와이프 가이드 */}
                  {showSwipeGuide && (
                    <div className="md:hidden absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg animate-fade-out">
                        Swipe left/right to navigate
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
