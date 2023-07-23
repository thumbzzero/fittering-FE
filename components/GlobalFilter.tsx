'use client';
import { useState } from 'react';

const buttonStyle = ' w-8 h-8 text-xs md:w-12 md:h-12 md:text-sm font-semibold';

export default function GlobalFilter() {
  const [selectedFilter, setSelectedFilter] = useState('A');

  const onGlobalFilterChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedButton = e.target as HTMLButtonElement;
    setSelectedFilter(selectedButton.id);
    localStorage.setItem('globalFilter', selectedButton.id);
  };

  return (
    <div className="fixed right-4 bottom-80 md:right-10 lg:right-48 flex flex-col border rounded-lg">
      <button
        className={
          (selectedFilter === 'A'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400') +
          buttonStyle +
          ' rounded-t-lg'
        }
        id="A"
        onClick={onGlobalFilterChange}
      >
        전체
      </button>
      <button
        className={
          (selectedFilter === 'M'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400') +
          buttonStyle +
          ' border-y'
        }
        id="M"
        onClick={onGlobalFilterChange}
      >
        남성
      </button>
      <button
        className={
          (selectedFilter === 'F'
            ? 'bg-main-color text-white'
            : 'bg-white text-custom-gray-400') +
          buttonStyle +
          ' rounded-b-lg'
        }
        id="F"
        onClick={onGlobalFilterChange}
      >
        여성
      </button>
    </div>
  );
}
