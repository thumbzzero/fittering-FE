'use client';

import Image from 'next/image';
import logo from '/public/Fittering_logo.png';
import { usePathname } from 'next/navigation';

const hideURL = ['/login', '/signup'];

export default function Header() {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <div className="flex  border-b h-20">
      <div className="w-[20%] relative md:w-[15%]">
        <Image
          className="w-3/5 md:w-1/3 py-2 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
          src={logo}
          alt="Fittering"
        />
      </div>
      <div className="w-[80%] relative md:w-[70%]">
        <input
          className="bg-custom-gray-50 rounded-lg w-[85%] h-8 md:w-3/5 md:h-10 ml-4 pl-4 text-xs absolute top-[50%] translate-y-[-50%]"
          type="text"
          placeholder="검색어를 입력하세요."
        />
      </div>
      <div className="hidden w-0 md:inline-block md:relative md:w-[15%]">
        <button className="absolute top-[50%] translate-y-[-50%] right-8 bg-main-color text-white rounded-lg px-6 py-2 text-xs">
          로그아웃
        </button>
      </div>
    </div>
  );
}
