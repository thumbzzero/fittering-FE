'use client';

import Image from 'next/image';
import Link from 'next/link';
import eye from 'public/icon/eye.svg';
import up from 'public/icon/up.svg';
import down from 'public/icon/down.svg';

const buttonStyle =
  'w-8 h-8 text-xs md:w-12 md:h-12 md:text-sm font-semibold bg-white';

export default function GlobalMenu() {
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
    <div className="fixed right-4 bottom-44 md:bottom-36 md:right-10 lg:right-48 flex flex-col border rounded-lg">
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
