import LineSection from '@/components/LineSection';
import DetailImage from '@/components/ProductDetail/DetailImage';
import DetailText from '@/components/ProductDetail/DetailText';

type Props = {
  descriptions: { url: string }[];
};

export default function DetailInfo({ descriptions }: Props) {
  const details = descriptions?.map((description, index) => {
    if (description.url.includes('txt')) {
      return <DetailText key={index} url={description.url} />;
    }
    return <DetailImage key={index} src={description.url} />;
  });

  return (
    <>
      <LineSection sectionName="상세 정보" displayStyle="" />
      {details}
    </>
  );
}
