'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const hideURL = ['/login', '/signup'];

const menuStyle = 'px-2 text-xl';

export const WebNavbar = () => {
  const pathname = usePathname();

  if (hideURL.includes(pathname)) {
    return null;
  }

  return (
    <nav className="absolute top-[50%] translate-y-[-50%] right-32">
      <Link className={menuStyle} href="/categories">
        🍔
      </Link>
      <Link className={menuStyle} href="/favorite_goods">
        🖤
      </Link>
      <Link className={menuStyle} href="/user">
        👤
      </Link>
    </nav>
  );
};
