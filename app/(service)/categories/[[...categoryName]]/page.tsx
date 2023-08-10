import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import React from 'react';

type Props = {
  params: {
    categoryName?: string[];
  };
};

function CategoryPage({ params: { categoryName } }: Props) {
  return (
    <div>
      {categoryName === undefined
        ? '전체 '
        : categoryName.map((category) => `${category} `)}
      카테고리 조회
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default CategoryPage;
