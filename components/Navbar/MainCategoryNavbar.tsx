'use client';

import { Category, outer, top, bottom, dress } from '@/types/categories';
import { usePathname } from 'next/navigation';
import MainCategoryLink from './MainCategoryLink';

export default function MainCategoryNavbar() {
  const gender = localStorage.getItem('GLOBAL_FILTER');
  const categories: Category[] =
    gender === 'M' ? [outer, top, bottom] : [outer, top, bottom, dress];
  const pathname = usePathname();

  return (
    <div className="w-full mt-4 md:mt-8 text-sm md:text-base flex items-center justify-center">
      <MainCategoryLink
        href="/categories"
        isSelected={pathname === '/categories'}
        name="전체"
      />
      {categories.map((category) => (
        <MainCategoryLink
          key={category.index}
          href={category.url}
          isSelected={pathname.includes(category.url)}
          name={category.name}
        />
      ))}
    </div>
  );
}
