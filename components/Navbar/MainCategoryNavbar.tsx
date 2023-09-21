'use client';

import { Category, outer, top, bottom, dress } from '@/types/categories';
import { usePathname, useSearchParams } from 'next/navigation';
import MainCategoryLink from './MainCategoryLink';

type Props = {
  mallName?: string;
};

export default function MainCategoryNavbar({ mallName }: Props) {
  const gender = localStorage.getItem('GLOBAL_FILTER');
  const categories: Category[] =
    gender === 'M' ? [outer, top, bottom] : [outer, top, bottom, dress];
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mallMainCategory = searchParams.get('category');

  return (
    <div className="w-full mt-4 md:mt-8 text-sm md:text-base flex items-center justify-center">
      <MainCategoryLink
        href={mallName ? `${decodeURI(pathname)}` : '/categories'}
        isSelected={
          mallName
            ? decodeURI(pathname) === `/malls/${mallName}` &&
              mallMainCategory === null
            : pathname === '/categories'
        }
        name="전체"
      />
      {categories.map((category) => (
        <MainCategoryLink
          key={category.index}
          href={
            mallName
              ? `${decodeURI(pathname)}?category=${category.url.split('/')[2]}`
              : category.url
          }
          isSelected={
            mallName
              ? category.url.includes(mallMainCategory ?? 'noMainCategory')
              : pathname.includes(category.url)
          }
          name={category.name}
        />
      ))}
    </div>
  );
}
