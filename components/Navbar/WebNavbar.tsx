'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import category from '/public/icon/category_black.svg';
import heart from '/public/icon/heart_black.svg';
import my from '/public/icon/my_black.svg';
import Image from 'next/image';

const hideURL = ['/login', '/signup'];

const menuStyle = 'mx-2';
const iconStyle = 'w-6';

export const WebNavbar = () => {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <nav className="flex absolute top-[50%] translate-y-[-50%] right-28">
      <Link
        className={menuStyle}
        href="/categories"
        aria-label="카테고리별 상품 조회로 이동"
      >
        <Image
          className={iconStyle}
          src={category}
          alt="카테고리별 상품 조회 버튼"
          aria-hidden={true}
        />
      </Link>
      <Link
        className={menuStyle}
        href="/favorite_goods"
        aria-label="좋아요한 상품 조회로 이동"
      >
        <Image
          className={iconStyle}
          src={heart}
          alt="좋아요한 상품 조회 버튼"
          aria-hidden={true}
        />
      </Link>
      <Link className={menuStyle} href="/user" aria-label="마이페이지로 이동">
        <Image
          className={iconStyle}
          src={my}
          alt="마이페이지 버튼"
          aria-hidden={true}
        />
      </Link>
    </nav>
  );
};
