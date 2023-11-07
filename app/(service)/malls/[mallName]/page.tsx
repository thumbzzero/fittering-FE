import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
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

export const dynamic = 'force-dynamic';

async function MallPage({ params: { mallName } }: Props) {
  const mallId = mallNameToMallId(decodeURI(mallName));

  return (
    <div>
      <MallIntroduction mallId={mallId} />
      <MainCategoryNavbar mallName={decodeURI(mallName)} />
      <SubCategoryNavbar mallName={decodeURI(mallName)} />
      <CategoryProducts mallId={mallId} />
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default MallPage;
