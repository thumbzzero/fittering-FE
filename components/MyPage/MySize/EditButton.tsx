'use client';
import { useState } from 'react';
import Modal from '@/components/MyPage/MySize/Modal';

export default function EditButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        className="w-full md:w-[10rem] mt-8 md:mt-12 py-2 block mx-auto bg-main-color text-white rounded-lg"
        onClick={handleClick}
        type="button"
      >
        수정
      </button>
      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen} /> : null}
    </>
  );
}
