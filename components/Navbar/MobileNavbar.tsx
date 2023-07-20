'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const hideURL = ['/login', '/signup'];

const menuStyle = 'flex-1 text-2xl text-center text-white';
const menuName = 'block text-xs mt-1';

export default function MobileNavbar() {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 flex w-full bg-nav-black py-2 md:hidden">
      <Link className={menuStyle} href="/">
        🏠
        <span className={menuName}>홈</span>
      </Link>
      <Link className={menuStyle} href="/categories">
        🍔
        <span className={menuName}>카테고리</span>
      </Link>
      <Link className={menuStyle} href="/favorite_goods">
        🖤
        <span className={menuName}>좋아요</span>
      </Link>
      <Link className={menuStyle} href="/user">
        👤
        <span className={menuName}>마이페이지</span>
      </Link>
    </nav>
  );
}
