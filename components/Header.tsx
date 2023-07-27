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
    <div className="flex h-16 md:h-20">
      <div className="z-0 w-full border-b border-border-gray absolute left-0 top-16 md:top-20"></div>
      <div className="w-[22%] xs:w-[20%] md:w-[17%] relative">
        <Link href="/">
          <Image
            className="w-full h-auto xs:w-[auto] xs:h-[2.7rem] md:h-[3rem] absolute top-[50%] translate-y-[-50%]"
            src={logo}
            alt="Fittering"
          />
        </Link>
      </div>
      <div className="relative w-[78%] xs:w-[80%] md:w-[50%]">
        <input
          className="border-[0.5px] bg-custom-gray-50 rounded right-0 w-11/12 md:w-full h-9 md:h-10 pl-4 text-xs absolute top-[50%] translate-y-[-50%]"
          type="text"
          placeholder="검색어를 입력하세요."
        />
        <Image
          className="absolute right-0 md:right-1 top-[50%] translate-y-[-50%] md:r-1/12"
          src={search}
          alt=""
        />
      </div>
      <div className="hidden w-0 md:inline-block md:relative md:w-[33%]">
        <WebNavbar />
        <button className="absolute top-[50%] translate-y-[-50%] right-0 bg-main-color text-white rounded w-20 h-8 text-xs">
          로그아웃
        </button>
      </div>
    </div>
  );
}
