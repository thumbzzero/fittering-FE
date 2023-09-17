import LineSection from '@/components/LineSection';
import DetailImage from './DetailImage';
import DetailText from './DetailText';

type Props = {
  descriptions: { url: string }[];
};

export default function DetailInfo({ descriptions }: Props) {
  const details = descriptions?.map((description, index) => {
    if (description.url.includes('image')) {
      return <DetailImage key={index} src={description.url} />;
    }
    return <DetailText key={index} url={description.url} />;
  });

  return (
    <>
      <LineSection sectionName="상세 정보" displayStyle="" />
      {details}
    </>
  );
}
