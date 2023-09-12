import LineSection from '@/components/LineSection';
import { BottomSize, DressSize, TopSize } from '@/types/sizes';
import { getSizeData } from '@/utils/getSizeData';
import SizeTable from './SizeTable';

type Props = {
  category: string;
  sizes: TopSize[] | BottomSize[] | DressSize[];
};

export default function SizeInfo({ category, sizes }: Props) {
  const sizeData = getSizeData(category, sizes);
  return (
    <>
      <LineSection sectionName="사이즈 정보" displayStyle="" />
      <SizeTable sizeData={sizeData} />
    </>
  );
}
