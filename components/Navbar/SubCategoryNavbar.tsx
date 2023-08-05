'use client';

import { Category, outer, top, dress, bottom } from '@/types/categories';
import { usePathname } from 'next/navigation';
import SubCategoryLink from './SubCategoryLink';

export default function SubCategoryNavbar() {
  const pathname = usePathname();
  let mainCategory: Category;

  if (pathname === '/categories' || pathname.includes(dress.url)) {
    return null;
  }

  if (pathname.includes(outer.url)) mainCategory = outer;
  else if (pathname.includes(top.url)) mainCategory = top;
  else mainCategory = bottom;

  return (
    <div className="flex items-center justify-center gap-2 xs:gap-6 mt-4 text-xs md:text-sm">
      <SubCategoryLink
        href={mainCategory.url}
        isSelected={pathname === mainCategory.url}
        name="전체"
      />
      {mainCategory.sub.map((sub) => (
        <SubCategoryLink
          key={sub.index}
          href={sub.url}
          isSelected={pathname === sub.url}
          name={sub.name}
        />
      ))}
    </div>
  );
}
