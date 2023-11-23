import Section from '@/components/Section';
import RankedMallPreview from '@/components/Malls/RankedMallPreview';
import AllLink from '@/components/MainPage/AllLink';

export default function MallRanking() {
  return (
    <>
      <Section sectionName="자주 방문한 쇼핑몰">
        <AllLink href="/malls" />
      </Section>
      <RankedMallPreview />
    </>
  );
}
