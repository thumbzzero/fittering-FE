'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import home from '/public/icon/home_white.svg';
import category from '/public/icon/category_white.svg';
import heart from '/public/icon/heart_white.svg';
import my from '/public/icon/my_white.svg';
import Image from 'next/image';

const hideURL = ['/login', '/signup'];

const menuStyle = 'flex-1 text-2xl text-center text-white';
const iconStyle = 'mx-auto h-5';
const menuName = 'block text-xs pt-2';

export default function MobileNavbar() {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed left-0 bottom-0 flex w-full bg-nav-black py-4 md:hidden">
      <Link className={menuStyle} href="/">
        <Image className={iconStyle} src={home} alt="홈 버튼" />
        <span className={menuName}>홈</span>
      </Link>
      <Link className={menuStyle} href="/categories">
        <Image
          className={iconStyle}
          src={category}
          alt="카테고리별 상품 조회 버튼"
        />
        <span className={menuName}>카테고리</span>
      </Link>
      <Link className={menuStyle} href="/favorite_goods">
        <Image
          className={iconStyle}
          src={heart}
          alt="좋아요한 상품 조회 버튼"
        />
        <span className={menuName}>좋아요</span>
      </Link>
      <Link className={menuStyle} href="/user">
        <Image className={iconStyle} src={my} alt="마이페이지 버튼" />
        <span className={menuName}>마이페이지</span>
      </Link>
    </nav>
  );
}
