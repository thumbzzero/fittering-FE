'use client';

import { useState, useEffect } from 'react';
import { detectMobileDevice } from '../utils/detectMobileDevice';

const buttonStyle = ' w-8 h-8 text-xs md:w-12 md:h-12 md:text-sm font-semibold';

export default function GlobalFilter() {
  const [selectedFilter, setSelectedFilter] = useState(
    localStorage.getItem('GLOBAL_FILTER') ?? 'A'
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
  }, []);

  const onGlobalFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedButton = e.target as HTMLButtonElement;
    setSelectedFilter(selectedButton.id);
    localStorage.setItem('GLOBAL_FILTER', selectedButton.id);
    window.location.reload();
  };

  return (
    <div
      className={
        'fixed right-4 lg:right-[calc((100%-1024px)/2)] flex flex-col border rounded-lg bottom-[264px] ' +
        (isMobile ? 'landscape:bottom-[82px]' : '')
      }
    >
      <button
        className={`${
          selectedFilter === 'A'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400'
        } ${buttonStyle} rounded-t-lg`}
        id="A"
        onClick={onGlobalFilterChange}
        type="button"
      >
        전체
      </button>
      <button
        className={`${
          selectedFilter === 'M'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400'
        } ${buttonStyle} border-y`}
        id="M"
        onClick={onGlobalFilterChange}
        type="button"
      >
        남성
      </button>
      <button
        className={`${
          selectedFilter === 'F'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400'
        } ${buttonStyle} rounded-b-lg`}
        id="F"
        onClick={onGlobalFilterChange}
        type="button"
      >
        여성
      </button>
    </div>
  );
}
