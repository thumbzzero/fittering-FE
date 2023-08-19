import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import CategoryProducts from '@/components/Products/CategoryProducts';
import React from 'react';

type Props = {
  params: {
    categoryName?: string[];
  };
};

function CategoryPage({ params: { categoryName } }: Props) {
  return (
    <div>
      <CategoryProducts
        categoryName={categoryName === undefined ? [] : categoryName}
      />
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default CategoryPage;
