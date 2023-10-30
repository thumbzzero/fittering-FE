'use client';

import { addFavorites, deleteFavorites } from '@/service/product';
import Image from 'next/image';
import grayHeart from 'public/icon/heart_gray.svg';
import greenHeart from 'public/icon/heart_green.svg';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

type Props = {
  initialFavorite: boolean;
};

export default function LikesButton({ initialFavorite }: Props) {
  const productId = parseInt(usePathname().split('/')[2]);
  const [isFavorite, setIsFavorite] = useState<boolean>(initialFavorite);

  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  const handleFavorites = async () => {
    if (isFavorite) {
      const response = await deleteFavorites(productId);
      if (response.ok) setIsFavorite(false);
    } else {
      const response = await addFavorites(productId);
      if (response.ok) setIsFavorite(true);
    }
  };

  return (
    <button
      className="w-7 h-7 sm:w-8 sm:h-8 sm:absolute sm:right-9"
      onClick={handleFavorites}
      type="button"
      aria-label={isFavorite ? '좋아요하기' : '좋아요 취소하기'}
    >
      <Image
        src={isFavorite ? greenHeart : grayHeart}
        alt={isFavorite ? '좋아요하기 버튼' : '좋아요 취소하기 버튼'}
        aria-hidden={true}
      />
    </button>
  );
}
