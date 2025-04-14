import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Home: React.FC = () => {
  const [splitPosition, setSplitPosition] = useState(0.5);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const isTouching = useRef(false);

  const images = ['/images/1.png', '/images/2.png'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroComplete(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      splitPosition < 0.4 ? '#fef6f6' :
      splitPosition > 0.6 ? '#f6faff' :
      '#ffffff';
  }, [splitPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isIntroComplete || !containerRef.current || isTouching.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const windowWidth = rect.width;
    const normalizedX = Math.max(0, Math.min(1, mouseX / windowWidth));
    setSplitPosition(normalizedX);
  };

  const handleMouseLeave = () => {
    if (!isIntroComplete) return;
    setSplitPosition(0.5);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isTouching.current = true;
    handleTouchMove(e);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isIntroComplete || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const windowWidth = rect.width;
    const normalizedX = Math.max(0, Math.min(1, touchX / windowWidth));
    setSplitPosition(normalizedX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    isTouching.current = false;
  
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.changedTouches[0].clientX - rect.left;
    const center = rect.width / 2;
    const distanceFromCenter = Math.abs(touchX - center);
  
    // 중앙 기준 ±50px 이내일 경우 중앙으로 리셋
    if (distanceFromCenter < 50) {
      setSplitPosition(0.5);
    }
  };
  

  const handleClick = (side: 'left' | 'right') => {
    if (side === 'left') {
      navigate('/portfolio?filter=design');
    } else {
      navigate('/portfolio?filter=code');
    }
  };

  const calculateOpacity = (position: number, isLeft: boolean) => {
    const threshold = 0.8;
    return isLeft ? (position >= threshold ? 0 : 1) : (position <= (1 - threshold) ? 0 : 1);
  };

  const designerOpacity = calculateOpacity(splitPosition, true);
  const coderOpacity = calculateOpacity(splitPosition, false);
  const translateAmount = (0.5 - splitPosition) * 200;

  return (
    <>
    <Helmet>
      <title>Sangjin Lee | Creative Architect & Digital Strategist</title>
      <meta name="description" content="Explore Sangjin Lee’s portfolio that bridges architecture, digital design, and data." />
      <meta property="og:title" content="Sangjin Lee | Creative Architect & Digital Strategist" />
      <meta property="og:description" content="Portfolio covering architecture, digital platforms, and analytics." />
      <meta property="og:url" content="https://sjlee.co.kr/" />
    </Helmet>
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden touch-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="main"
    >
      {/* 배경 이미지 */}
      <img
        src="/images/3.png"
        alt="Designer background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-out"
        style={{ opacity: splitPosition <= 0.3 ? 0.6 : 0 }}
      />
      <img
        src="/images/4.png"
        alt="Coder background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-out"
        style={{ opacity: splitPosition >= 0.7 ? 0.3 : 0 }}
      />

      {/* 왼쪽 영역 */}
      <div
        className="absolute inset-0 z-10 transition-all duration-700 ease-out"
        style={{
          clipPath: `polygon(0 0, ${splitPosition * 100}% 0, ${splitPosition * 100}% 100%, 0 100%)`,
          transform: isIntroComplete ? `translateX(${translateAmount}px)` : 'translateX(-100%)',
        }}
      >
        <img src={images[0]} alt="Designer" className="w-full h-full object-cover" />
      </div>

      {/* 오른쪽 영역 */}
      <div
        className="absolute inset-0 z-10 transition-all duration-700 ease-out"
        style={{
          clipPath: `polygon(${splitPosition * 100}% 0, 100% 0, 100% 100%, ${splitPosition * 100}% 100%)`,
          transform: isIntroComplete ? `translateX(${translateAmount}px)` : 'translateX(100%)',
        }}
      >
        <img src={images[1]} alt="Coder" className="w-full h-full object-cover" />
      </div>

      {/* Brand Architect 텍스트 */}
      <div
        className="absolute top-[18%] left-5 text-left z-20 cursor-pointer transition-all duration-500 px-2
        md:top-1/2 md:-translate-y-1/2 md:left-10"
        style={{
          opacity: isIntroComplete ? designerOpacity : 0,
          transitionDelay: '0.2s',
          maxWidth: '45vw',
        }}
        onClick={() => handleClick('left')}
      >
        <h1 className="text-2xl sm:text-5xl font-bold text-black leading-snug mb-2">
          Brand Architect
        </h1>
        <p className="hidden sm:block text-sm sm:text-lg text-gray-700 leading-tight">
          Retail Experience Designer<br className="hidden md:inline" />
          specializing in branded environments.
        </p>
      </div>

      {/* Data-Driven Digital Maker 텍스트 */}
      <div
        className="absolute top-[18%] right-5 text-right z-20 cursor-pointer transition-all duration-500 px-2
        md:top-1/2 md:-translate-y-1/2 md:right-10"
        style={{
          opacity: isIntroComplete ? coderOpacity : 0,
          transitionDelay: '0.2s',
          maxWidth: '45vw',
        }}
        onClick={() => handleClick('right')}
      >
        <h1 className="text-2xl sm:text-5xl font-bold text-black leading-snug mb-2">
          Data-Driven Digital Maker
        </h1>
        <p className="hidden sm:block text-sm sm:text-lg text-gray-700 leading-tight">
          Web, Platform & Data Application Developer<br className="hidden md:inline" />
          turning insights into experiences.
        </p>
      </div>
    </div>
    </>
  );
};

export default Home;
