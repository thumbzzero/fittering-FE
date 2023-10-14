'use client';

import Image from 'next/image';
import Link from 'next/link';
import eye from 'public/icon/eye.svg';
import up from 'public/icon/up.svg';
import down from 'public/icon/down.svg';
import disabledUp from 'public/icon/disabled_up.svg';
import disabledDown from 'public/icon/disabled_down.svg';
import { detectMobileDevice } from '../utils/detectMobileDevice';
import { useState, useEffect } from 'react';

const buttonStyle =
  'w-8 h-8 text-xs md:w-12 md:h-12 md:text-sm font-semibold bg-white';

export default function GlobalMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const [isUpActive, setIsUpActive] = useState(false);
  const [isDownActive, setIsDownActive] = useState(
    document.documentElement.scrollHeight > window.innerHeight
  );

  useEffect(() => {
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
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

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setIsUpActive(true);
    } else setIsUpActive(false);
    if (
      window.scrollY + window.innerHeight <
      document.documentElement.scrollHeight
    ) {
      setIsDownActive(true);
    } else setIsDownActive(false);
  });

  return (
    <div
      className={
        'fixed right-4 lg:right-[calc((100%-1024px)/2)] bottom-[150px] md:bottom-[100px] flex flex-col border rounded-lg ' +
        (isMobile ? 'landscape:hidden' : '')
      }
    >
      <Link
        className={buttonStyle + ' rounded-t-lg'}
        href="/user/recent"
        aria-label="최근 본 상품으로 이동"
      >
        <Image
          className="mx-auto h-full"
          src={eye}
          alt="최근 본 상품 보러가기 버튼"
          aria-hidden={true}
        />
      </Link>
      <button
        className={`${buttonStyle} border-y`}
        onClick={MoveToTop}
        disabled={!isUpActive}
        type="button"
        aria-label='맨 위로 가기'
      >
        <Image
          className="mx-auto h-full"
          src={isUpActive ? up : disabledUp}
          alt="맨 위로 가기 버튼"
          aria-hidden={true}
        />
      </button>
      <button
        className={`${buttonStyle} rounded-b-lg`}
        onClick={MoveToDown}
        disabled={!isDownActive}
        type="button"
        aria-label='맨 아래로 가기'
      >
        <Image
          className="mx-auto h-full"
          src={isDownActive ? down : disabledDown}
          alt="맨 아래로 가기 버튼"
          aria-hidden={true}
        />
      </button>
    </div>
  );
}
