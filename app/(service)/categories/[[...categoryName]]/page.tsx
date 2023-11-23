import GlobalFilter from '@/components/GlobalFilter';
import QuickMenu from '@/components/QuickMenu';
import React from 'react';
import CategoryProducts from '@/components/Products/CategoryProducts';

type Props = {
  params: {
    categoryName?: string[];
  };
};

async function CategoryPage({ params: { categoryName } }: Props) {
  return (
    <div>
      <CategoryProducts
        categoryName={categoryName === undefined ? [] : categoryName}
      />
      <GlobalFilter />
      <QuickMenu />
    </div>
  );
}

export default CategoryPage;
