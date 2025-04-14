import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();

  // logs 페이지 여부 확인
  const isLogsPage = location.pathname.startsWith('/logs');

  return (
    <footer
      className={`text-sm py-8 text-center border-t transition-all duration-300 ${
        isLogsPage
          ? 'bg-black text-white border-gray-700'  // logs 페이지
          : 'bg-white text-gray-500 border-gray-200' // 그 외
      }`}
    >
      <p>© {new Date().getFullYear()} Sangjin Lee. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/luts83" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/nirone7" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:lee.sanggean@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
