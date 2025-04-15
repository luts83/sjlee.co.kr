import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const Footer: React.FC = () => {
  const location = useLocation();
  const [email] = useState('lee.sanggean@gmail.com');

  // logs 페이지 여부 확인
  const isLogsPage = location.pathname.startsWith('/logs');

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      toast.success('Email copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy email.');
    }
  };

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
        <button 
          onClick={handleEmailClick}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          Email
        </button>
      </div>
    </footer>
  );
};

export default Footer;
