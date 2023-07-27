'use client';

import Image from 'next/image';
import Link from 'next/link';
import eye from 'public/icon/eye.svg';
import up from 'public/icon/up.svg';
import down from 'public/icon/down.svg';
import { detectMobileDevice } from '../utils/detectMobileDevice';
import { useState, useEffect } from 'react';

const buttonStyle =
  'w-8 h-8 text-xs md:w-12 md:h-12 md:text-sm font-semibold bg-white';

export default function GlobalMenu() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(detectMobileDevice(window.navigator.userAgent))
  }, []);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MoveToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={
        'fixed right-4 lg:right-[calc((100%-1024px)/2)] bottom-[150px] md:bottom-[100px] flex flex-col border rounded-lg ' +
        (isMobile ? 'landscape:hidden' : '')
      }
    >
      <Link className={buttonStyle + ' rounded-t-lg'} href="">
        <Image className="mx-auto h-full" src={eye} alt="최근 본 상품" />
      </Link>
      <button className={`${buttonStyle} border-y`} onClick={MoveToTop}>
        <Image className="mx-auto h-full" src={up} alt="˄" />
      </button>
      <button className={`${buttonStyle} rounded-b-lg`} onClick={MoveToDown}>
        <Image className="mx-auto h-full" src={down} alt="⌄" />
      </button>
    </div>
  );
}
