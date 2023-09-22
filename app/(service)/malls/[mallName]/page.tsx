import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import { mallNameToMallId } from '@/utils/mallNameToMallId';
import MallIntroduction from '@/components/Mall/MallIntroduction';
import MainCategoryNavbar from '@/components/Navbar/MainCategoryNavbar';
import SubCategoryNavbar from '@/components/Navbar/SubCategoryNavbar';
import { getCategoriesProductsData } from '@/service/categoriesProducts';
import CategoryProducts from '@/components/Products/CategoryProducts';

type Props = {
  params: {
    mallName: string;
  };
};

export const revalidate = 1209600; // 3600*24*14

async function MallPage({ params: { mallName } }: Props) {
  const mallId = mallNameToMallId(decodeURI(mallName));
  const mallMainCategoriesProducts = await getCategoriesProductsData(
    'main',
    await mallId
  );
  const mallSubCategoriesProducts = await getCategoriesProductsData(
    'sub',
    await mallId
  );

  return (
    <div>
      <MallIntroduction mallId={mallId} />
      <MainCategoryNavbar mallName={decodeURI(mallName)} />
      <SubCategoryNavbar mallName={decodeURI(mallName)} />
      <CategoryProducts
        mainCategoriesProducts={mallMainCategoriesProducts}
        subCategoriesProducts={mallSubCategoriesProducts}
      />
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default MallPage;
