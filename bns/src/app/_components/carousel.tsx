'use client'; // Next.js App Router 사용하는 경우에만 필요

import { useState } from 'react';

export default function Carousel() {
  const items = [
    {
      title: '슬라이드 1',
      description: '3D 영상 재생 솔루션',
      background: 'bg-blue-500',
    },
    {
      title: '슬라이드 2',
      description: 'VR 시뮬레이터 제어 미들웨어',
      background: 'bg-green-500',
    },
    {
      title: '슬라이드 3',
      description: '4D 특수효과 컨트롤러',
      background: 'bg-purple-500',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* 캐러셀 박스 */}
      <div className="overflow-hidden rounded-2xl h-[300px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`${item.background} flex-shrink-0 w-full h-[300px] text-white flex items-center justify-center flex-col text-center rounded-2xl`}
            >
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        &#8249;
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-3 py-1 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
}
