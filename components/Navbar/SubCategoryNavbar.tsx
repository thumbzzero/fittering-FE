'use client';

import { Category, outer, top, dress, bottom } from '@/types/categories';
import { usePathname, useSearchParams } from 'next/navigation';
import SubCategoryLink from '@/components/Navbar/SubCategoryLink';

type Props = {
  mallName?: string;
};

export default function SubCategoryNavbar({ mallName }: Props) {
  const pathname = usePathname();
  let mainCategory: Category;

  const searchParams = useSearchParams();
  const mallMainCategory = searchParams.get('category');
  const mallSubCategory = searchParams.get('subCategory');

  const hasNoSubCategory = mallName
    ? mallMainCategory === null || dress.url.includes(mallMainCategory)
    : pathname === '/categories' || pathname.includes(dress.url);

  if (hasNoSubCategory) {
    return null;
  }

  if (
    mallName
      ? outer.url.includes(mallMainCategory ?? '-')
      : pathname.includes(outer.url)
  )
    mainCategory = outer;
  else if (
    mallName
      ? top.url.includes(mallMainCategory ?? '-')
      : pathname.includes(top.url)
  )
    mainCategory = top;
  else mainCategory = bottom;

  return (
    <div className="flex items-center justify-center gap-2 xs:gap-6 mt-4 text-xs md:text-sm">
      <SubCategoryLink
        href={
          mallName
            ? `${decodeURI(pathname)}?category=${mallMainCategory}`
            : mainCategory.url
        }
        isSelected={
          mallName ? mallSubCategory === null : pathname === mainCategory.url
        }
        name="전체"
      />
      {mainCategory.sub.map((sub) => (
        <SubCategoryLink
          key={sub.index}
          href={
            mallName
              ? `${decodeURI(pathname)}?category=${
                  sub.url.split('/')[2]
                }&subCategory=${sub.url.split('/')[3]}`
              : sub.url
          }
          isSelected={
            mallName
              ? mallSubCategory === sub.url.split('/')[3] 
              : pathname === sub.url
          }
          name={sub.name}
        />
      ))}
    </div>
  );
}
