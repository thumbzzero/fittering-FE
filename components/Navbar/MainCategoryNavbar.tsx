'use client';

import { category, outer, top, dress, bottom } from '@/types/categories';
import { usePathname } from 'next/navigation';
import MainCategoryLink from './MainCategoryLink';

export default function MainCategoryNavbar() {
  const categories: category[] = [outer, top, dress, bottom];
  const pathname = usePathname();

  return (
    <div className="w-full mt-4 md:mt-8 text-sm md:text-base flex items-center justify-center">
      <MainCategoryLink
        key={-1}
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
