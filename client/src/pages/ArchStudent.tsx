import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArchStudent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 58;
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isTouchingNav = useRef(false);

  const imageFiles = Array.from({ length: totalPages }, (_, i) => 
    `/assets/portfolio-images/portfolio-2003-2013_페이지_${String(i + 1).padStart(2, '0')}.png`
  );

  const pageVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 300 : -300,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -300 : 300,
      scale: 0.96,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const renderPage = (page: number) => {
    return (
      <img
        loading="lazy"
        src={imageFiles[page - 1]}
        alt={`Page ${page}`}
        className="w-full h-auto max-h-screen object-contain"
      />
    );
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || isTransitioning) return;
    setIsTransitioning(true);
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);

    if (navRef.current) {
      const thumbWidth = 62;
      const navWidth = navRef.current.offsetWidth;
      const scrollPosition = (newPage - 1) * thumbWidth - (navWidth / 2) + (thumbWidth / 2);
      navRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }

    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const navTop = navRef.current?.getBoundingClientRect().top || 0;
    const navHeight = navRef.current?.offsetHeight || 0;

    if (touchY >= navTop && touchY <= navTop + navHeight) {
      isTouchingNav.current = true;
    } else {
      isTouchingNav.current = false;
    }

    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isTouchingNav.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handlePageChange(currentPage + 1);
      } else {
        handlePageChange(currentPage - 1);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen w-screen bg-white overflow-hidden relative overflow-y-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentPage}
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
        >
          {renderPage(currentPage)}
        </motion.div>
      </AnimatePresence>

      {!isMobile && (
        <>
          <div
            className="hidden md:flex absolute top-0 left-0 w-1/2 h-full items-center justify-start cursor-pointer z-40"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div
            className="hidden md:flex absolute top-0 right-0 w-1/2 h-full items-center justify-end cursor-pointer z-40"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-gray-600 hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </>
      )}

      <motion.div
        ref={navRef}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center px-2 z-50"
        style={{ overflowX: 'auto', overflowY: 'hidden', scrollBehavior: 'smooth' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="flex gap-2 p-2 w-full h-full justify-start items-center">
          {imageFiles.map((src, index) => (
            <motion.img
              key={index}
              loading="lazy"
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-12 h-12 object-cover rounded-md cursor-pointer transition-all duration-200 ${currentPage === index + 1 ? 'ring-2 ring-gray-300 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`}
              onClick={() => handlePageChange(index + 1)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ArchStudent;
