import Section from '@/components/Section';
import { getProductPreviewWithoutToken } from '@/service/product';
import RankFilter from './RankFilter';

async function fetchRank(gender: 'A' | 'M' | 'F') {
  return await getProductPreviewWithoutToken(`/products/rank/${gender}`, {
    next: { revalidate: 3600 * 24 },
  });
}

export default async function ProductsRank() {
  const allProducts = await fetchRank('A');
  const maleProducts = await fetchRank('M');
  const femaleProducts = await fetchRank('F');

  const date = new Date();

  return (
    <>
      <Section sectionName="오늘의 랭킹">
        <span className="absolute right-0 bottom-0 text-xs text-custom-gray-700 font-normal">{`${date.getFullYear()}년 ${
          date.getMonth() + 1
        }월 ${date.getDate()}일 기준`}</span>
      </Section>
      <RankFilter
        allProducts={allProducts}
        maleProducts={maleProducts}
        femaleProducts={femaleProducts}
      />
    </>
  );
}
