'use client';

import Image from 'next/image';
import blankStar from '/public/icon/blank_star.svg';
import filledStar from '/public/icon/filled_star.svg';
import { useState } from 'react';
import { addFavorites, deleteFavorites } from '@/service/malls';

type Props = {
  mallId: number;
  initialFavorite: boolean;
};

export default function StarButton({ mallId, initialFavorite }: Props) {
  const [isFavorites, setIsFavorites] = useState<boolean>(initialFavorite);

  const handleFavorites = async () => {
    if (isFavorites) {
      const response = await deleteFavorites(mallId);
      if (response.ok) setIsFavorites(false);
    } else {
      const response = await addFavorites(mallId);
      if (response.ok) setIsFavorites(true);
    }
  };

  return (
    <button onClick={handleFavorites}>
      <Image
        className="absolute w-[20px] md:w-[30px] right-0 top-0 translate-y-[50%]"
        src={isFavorites ? filledStar : blankStar}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
}
