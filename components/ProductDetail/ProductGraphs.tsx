import { getAgeRange } from '@/utils/getAgeRange';
import PopularInformation from './PopularInformation';

type Props = {
  popularGender: string;
  popularAgeRange: number;
  popularAgeRangePercents: number[];
  popularGenderPercents: number[];
};

export default function ProductGraphs({
  popularGender,
  popularAgeRange,
  popularAgeRangePercents,
  popularGenderPercents,
}: Props) {
  return (
    <>
      <PopularInformation
        popularGender={popularGender}
        popularAgeRange={getAgeRange(popularAgeRange)}
      />
    </>
  );
}
