import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import React from 'react';
import CategoryProducts from '@/components/Products/CategoryProducts';

type Props = {
  params: {
    categoryName?: string[];
  };
};

export const dynamic = 'force-dynamic';

async function CategoryPage({ params: { categoryName } }: Props) {
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
