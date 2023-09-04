'use client';

import Image from "next/image";
import blankStar from '/public/icon/blank_star.svg';
import filledStar from '/public/icon/filled_star.svg';
import { useState } from 'react';

export default function StarButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button onClick={() => setIsFavorite(!isFavorite)}>
      <Image
        className="absolute w-[20px] md:w-[30px] right-0 top-0 translate-y-[50%]"
        src={isFavorite ? filledStar : blankStar}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
}
