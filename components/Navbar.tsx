'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainMenu, SubMenuType } from './menu';

export const Navbar = () => {
  const pathname = usePathname();
  const isLoginned = !(
    pathname.startsWith('/login') || pathname.startsWith('/signup')
  );
  return (
    <nav className={isLoginned ? '' : 'hidden'}>
      {mainMenu.map((menu, index) => {
        const isActive =
          menu.path === '/' ? pathname === '/' : pathname.startsWith(menu.path);
        return (
          <Link
            className={isActive ? 'font-bold' : ''}
            href={menu.path}
            key={index}
          >
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
};
