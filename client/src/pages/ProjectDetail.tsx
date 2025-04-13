import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Project not found.
      </div>
    );
  }

  const folderPath = project.image.substring(0, project.image.lastIndexOf('/'));
  const projectImages = project.imageFiles.map(file => `${folderPath}/${file}`);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

// ✅ 연도 기준 내림차순 정렬된 배열 사용
const sortedProjects = [...projects]
  .filter((p) => !p.isStudent)
  .sort((a, b) => Number(b.date) - Number(a.date));

const currentIndex = sortedProjects.findIndex(p => p.id === Number(id));
const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;


  return (
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
          {projectImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${project.title} - ${index + 1}`}
              className="w-full rounded-lg shadow-md"
            />
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



        {/* Navigation */}
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
      </div>
    </div>
  );
};

export default ProjectDetail;
