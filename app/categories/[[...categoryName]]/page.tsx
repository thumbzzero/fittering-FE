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
    </div>
  );
}

export default CategoryPage;
