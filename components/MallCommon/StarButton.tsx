'use client';

import Image from 'next/image';
import blankStar from '/public/icon/blank_star.svg';
import filledStar from '/public/icon/filled_star.svg';
import { useState } from 'react';
import { addFavorites, deleteFavorites } from '@/service/malls';

type Props = {
  mallId: number | Promise<number>;
  initialFavorite: boolean;
  isMallPage?: boolean;
};

export default function StarButton({
  mallId,
  initialFavorite,
  isMallPage,
}: Props) {
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
        className={`${
          isMallPage
            ? 'inline-block w-5 h-5 sm:w-7 sm:h-7 right-9'
            : 'absolute w-[20px] md:w-[30px] right-0 translate-y-[50%]'
        } top-0`}
        src={isFavorites ? filledStar : blankStar}
        alt="쇼핑몰 즐겨찾기 버튼"
        width={20}
        height={20}
        aria-hidden={true}
      />
    </button>
  );
}
