'use client';

import Image from 'next/image';
import logo from '/public/Fittering_logo.png';
import { usePathname } from 'next/navigation';
import { WebNavbar } from './Navbar/WebNavbar';
import Link from 'next/link';
import search from '/public/icon/search_green.svg';

const hideURL = ['/login', '/signup'];

export default function Header() {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <div className="flex border-b h-16 md:h-20 md:px-10 lg:px-48">
      <div className="w-[25%] md:w-[10%] relative">
        <Link href="/">
          <Image
            className="w-2/3 left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0 py-2 absolute top-[50%] translate-y-[-50%]"
            src={logo}
            alt="Fittering"
          />
        </Link>
      </div>
      <div className="w-[75%] relative md:w-[50%] md:mr-4">
        <input
          className="border-[0.5px] bg-custom-gray-50 rounded w-11/12 md:w-full h-9 md:h-10  mx-2 pl-4 text-xs absolute top-[50%] translate-y-[-50%]"
          type="text"
          placeholder="검색어를 입력하세요."
        />
        <Image className='absolute right-4 md:right-0 top-[50%] translate-y-[-50%] md:r-1/12' src={search} alt='' />
      </div>
      <div className="hidden w-0 md:inline-block md:relative md:w-[40%]">
        <WebNavbar />
        <button className="absolute top-[50%] translate-y-[-50%] right-0 bg-main-color text-white rounded w-20 h-8 text-xs">
          로그아웃
        </button>
      </div>
    </div>
  );
}
