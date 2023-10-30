import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import MallRanking from '@/components/MainPage/MallRanking';
import ProductRecommendation from '@/components/MainPage/ProductRecommendation';
import ProductRecommendations from '@/components/MainPage/ProductRecommendations';
import ProductsRank from '@/components/MainPage/ProductsRank';

export default function Home() {
  return (
    <section>
      <MallRanking />
      <ProductRecommendations>
        <ProductRecommendation recommendationType={1} />
        <ProductRecommendation recommendationType={2} />
      </ProductRecommendations>
      <ProductsRank />
      <GlobalFilter />
      <GlobalMenu />
    </section>
  );
}
