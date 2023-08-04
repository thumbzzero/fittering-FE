'use client';

import { category, outer, top, dress, bottom } from '@/types/categories';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/*
카테고리 조회 페이지 헤더 아래에 대분류 Navbar / 소분류 Navbar 추가 & 스타일링
소분류 Navbar는 상의, 아우터, 바지에만 존재 (전체 / 원피스는 소분류 없음)
각 카테고리 선택 시 해당 카테고리로 라우팅 되도록 Link 추가
*/

export default function MainCategoryNavbar() {
  const categories: category[] = [outer, top, dress, bottom];
  const pathname = usePathname();

  return (
    <div className="w-full mt-4 md:mt-8 text-sm md:text-base flex items-center justify-center">
      <Link
        href="/categories"
        className={
          'flex-1 text-center pb-2 font-semibold border-b ' +
          (pathname === '/categories'
            ? 'border-main-color border-b-[2px] text-black'
            : 'text-custom-gray-800')
        }
      >
        전체
      </Link>
      {categories.map((category) => (
        <Link
          key={category.index}
          href={category.url}
          className={
            'flex-1 text-center pb-2 font-semibold border-b ' +
            (pathname.includes(category.url)
              ? 'border-main-color border-b-[2px] text-black'
              : 'text-custom-gray-800')
          }
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
