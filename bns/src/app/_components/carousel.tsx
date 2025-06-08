'use client';

import { useState } from 'react';

export default function Carousel() {
  const items = [
    {
      id: 1,
      title: '슬라이드 1',
      description: '주요 제품 소개',
      image: "/img/main1.jpg",
    },
    {
      id: 2,
      title: '슬라이드 2',
      description: 'VR 시뮬레이터 제어 미들웨어',
      image: "/img/main2.jpg",
    },
    {
      id: 3,
      title: '슬라이드 3',
      description: '4D 특수효과 컨트롤러',
      image: "/img/main3.jpg",
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
    <div className="relative w-full max-w-4xl mx-auto">
      {/* 캐러셀 박스 */}
      <div className="overflow-hidden rounded-2xl h-[300px]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full h-[300px] relative"
            >
              <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        &#8249;
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-3 py-1 rounded-full z-10"
      >
        &#8250;
      </button>
    </div>
  );
}
