import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import MallRanking from '@/components/MainPage/MallRanking';
import ProductRecommendation from '@/components/MainPage/ProductRecommendation';

export default function Home() {
  return (
    <section>
      <MallRanking />
      <ProductRecommendation recommendationType={1} />
      <ProductRecommendation recommendationType={2} />
      <GlobalFilter />
      <GlobalMenu />
    </section>
  );
}
