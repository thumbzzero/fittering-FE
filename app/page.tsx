import GlobalFilter from '@/components/GlobalFilter';
import RankedMallPreview from '@/components/Malls/RankedMallPreview';
import Section from '@/components/Section';
import GlobalMenu from '../components/GlobalMenu';

export default function Home() {
  return (
    <section>
      <Section sectionName="자주 방문한 쇼핑몰" />
      {/* @ts-expect-error Server Component */}
      <RankedMallPreview />
      <Section sectionName="열졍콩님을 위한 추천 상품" />
      <div className="block bg-bean-head-color w-full h-[1000vh]"></div>
      <GlobalFilter />
      <GlobalMenu />
    </section>
  );
}
