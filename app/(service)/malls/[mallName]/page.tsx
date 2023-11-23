import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import QuickMenu from '@/components/QuickMenu';
import { mallNameToMallId } from '@/utils/mallNameToMallId';
import MallIntroduction from '@/components/Mall/MallIntroduction';
import MainCategoryNavbar from '@/components/Navbar/MainCategoryNavbar';
import SubCategoryNavbar from '@/components/Navbar/SubCategoryNavbar';
import CategoryProducts from '@/components/Products/CategoryProducts';

type Props = {
  params: {
    mallName: string;
  };
};

async function MallPage({ params: { mallName } }: Props) {
  const mallId = mallNameToMallId(decodeURI(mallName));

  return (
    <div>
      <MallIntroduction mallId={mallId} />
      <MainCategoryNavbar mallName={decodeURI(mallName)} />
      <SubCategoryNavbar mallName={decodeURI(mallName)} />
      <CategoryProducts mallId={mallId} />
      <GlobalFilter />
      <QuickMenu />
    </div>
  );
}

export default MallPage;
