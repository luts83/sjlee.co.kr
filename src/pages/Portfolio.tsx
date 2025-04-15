import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Project, projects } from '../data/projects';
import { Helmet } from 'react-helmet-async';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get('filter') as 'all' | 'design' | 'code' | null;

  const [filter, setFilter] = useState<'all' | 'design' | 'code'>(initialFilter ?? 'all');

  const handleStudentPortfolioClick = () => {
    navigate('/portfolio/arch-student');
  };

  const filteredProjects = projects.filter((project: Project) => {
    if (project.isStudent) return false;
    if (filter === 'design') return !project.isComputer;
    if (filter === 'code') return !!project.isComputer;
    return true;
  });

  // ✅ 프로젝트를 최신순(내림차순)으로 정렬
  const sortedProjects = [...filteredProjects].sort((a, b) => Number(b.date) - Number(a.date));

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
    <Helmet>
      <title>Sangjin Lee | Portfolio</title>
      <meta name="description" content="Explore Sangjin Lee's portfolio showcasing architecture, digital design, and data projects." />
      <meta property="og:title" content="Sangjin Lee | Portfolio" />
      <meta property="og:description" content="Explore architecture, digital design, and data projects by Sangjin Lee." />
      <meta property="og:image" content="/images/og/portfolio-og-image.png" />
    </Helmet>
    <div className="min-h-screen bg-white">
      <div id="design-section" className="pt-20 px-6 pb-10 bg-white">
        <div className="max-w-6xl mx-auto">
        <motion.h1
            className="text-4xl font-light mb-12 tracking-tight text-gray-600 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Projects
          </motion.h1>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {(['all', 'design', 'code'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  filter === f ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {sortedProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                className="flex flex-col h-full cursor-pointer border border-gray-100 rounded-lg p-4 hover:shadow transition"
                variants={fadeInUp}
                onClick={() =>
                  navigate(
                    project.isComputer
                      ? `/portfolio/code/${project.id}`
                      : `/portfolio/arch-pro/${project.id}`
                  )
                }
              >
                {/* 년도 왼쪽 / 국가 오른쪽 */}
                <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
                  <span>{project.date}</span>
                  <span>{project.location}</span>
                </div>

                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold uppercase text-gray-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-snug mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-200 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Student Portfolio Card */}
            <motion.div
              className="flex flex-col justify-center items-center border border-dashed border-gray-300 p-6 cursor-pointer hover:bg-gray-100 transition"
              variants={fadeInUp}
              onClick={handleStudentPortfolioClick}
            >
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg mb-4">
                <img
                  src="/images/student-1.png"
                  alt="Student Portfolio"
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
              </div>
              <h3 className="text-lg font-bold uppercase text-gray-600 mb-2">Student Portfolio</h3>
              <p className="text-gray-600 leading-relaxed text-sm text-center">
                Early works from school years – design, architecture, and experiments.
              </p>
            </motion.div>
          </motion.div>
          {/* Signature Section */}
<motion.div>



  {/* Scroll to top round button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-gray-300 rounded-full shadow-md hover:bg-white transition"
    aria-label="Back to top"
  >
    <i className="fas fa-arrow-up text-gray-700"></i>
  </button>
</motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
