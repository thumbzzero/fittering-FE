'use client';

import { fetchWithoutToken } from '@/utils/customFetch';
import { CategoryCount } from '@/types/categories';
import { useState, useEffect } from 'react';
import PageButton from '@/components/PageButton';
import PagingArrowButton from '@/components/PagingArrowButton';
import leftArrow from '/public/icon/left_black.svg';
import rightArrow from '/public/icon/right_black.svg';

type Props = {
  categoryType: keyof CategoryCount;
  categoryId: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  mallId?: Promise<number>;
};

export default function PageNavigator({
  categoryType,
  categoryId,
  currentPage,
  setCurrentPage,
  mallId,
}: Props) {
  const [categoryCount, setCategoryCount] = useState<CategoryCount>(
    {} as CategoryCount
  );

  useEffect(() => {
    async function fetchCategoryCount() {
      const data = await (
        await fetchWithoutToken(
          `${mallId ? `/malls/${mallId}` : ''}/categories/count`
        )
      ).json();
      setCategoryCount(data);
    }
    fetchCategoryCount();
  }, [mallId]);

  const productCount =
    categoryCount[categoryType]?.find(
      (category) => category.categoryId === categoryId
    )?.count ?? Infinity;

  const start = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const end = Math.min(start + 4, Math.ceil(productCount / 20));

  let pages = [];
  for (let page = start; page <= end; page++) {
    pages.push(page);
  }

  return (
    <div className="flex items-center justify-center text-center my-12">
      <PagingArrowButton
        type="이전"
        arrowSrc={leftArrow}
        isActive={start !== 1}
        onClick={() => {
          setCurrentPage(Math.floor((currentPage - 6) / 5) * 5 + 5);
        }}
      />
      {pages.map((page) => (
        <PageButton
          key={page}
          page={page}
          isActive={page === currentPage}
          onClick={() => setCurrentPage(page)}
        />
      ))}
      <PagingArrowButton
        type="다음"
        arrowSrc={rightArrow}
        isActive={end !== Math.ceil(productCount / 20)}
        onClick={() => {
          setCurrentPage(
            Math.min(
              Math.floor((currentPage + 4) / 5) * 5 + 1,
              Math.ceil(productCount / 20)
            )
          );
        }}
      />
    </div>
  );
}
