'use client';

import Image from 'next/image';
import back from 'public/icon/left_black.svg';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className="absolute left-0 inline-block md:hidden"
      aria-label="뒤로 가기"
    >
      <Image src={back} alt="뒤로 가기 버튼" aria-hidden={true} />
    </button>
  );
}
