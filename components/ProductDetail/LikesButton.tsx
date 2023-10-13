'use client';

import { addFavorites, deleteFavorites } from '@/service/product';
import Image from 'next/image';
import grayHeart from 'public/icon/heart_gray.svg';
import greenHeart from 'public/icon/heart_green.svg';
import { usePathname } from 'next/navigation';

type Props = {
  isFavorite: boolean;
};

export default function LikesButton({ isFavorite }: Props) {
  const productId = parseInt(usePathname().split('/')[2]);

  const handleFavorites = async () => {
    if (isFavorite) {
      await deleteFavorites(productId);
    } else {
      await addFavorites(productId);
    }
  };

  return (
    <button
      className="w-7 h-7 sm:w-8 sm:h-8 sm:absolute sm:right-9"
      onClick={handleFavorites}
      type="button"
    >
      <Image
        src={isFavorite ? greenHeart : grayHeart}
        alt={isFavorite ? '좋아요하기 버튼' : '좋아요 취소하기 버튼'}
        aria-hidden={true}
      />
    </button>
  );
}
