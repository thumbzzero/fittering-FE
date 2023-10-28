import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import MallRanking from '@/components/MainPage/MallRanking';
import ProductRecommendation from '@/components/MainPage/ProductRecommendation';
import ProductsRank from '@/components/MainPage/ProductsRank';

export default function Home() {
  return (
    <section>
      <MallRanking />
      <ProductRecommendation recommendationType={1} />
      <ProductRecommendation recommendationType={2} />
      <ProductsRank />
      <GlobalFilter />
      <GlobalMenu />
    </section>
  );
}
