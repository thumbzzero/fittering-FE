import { getAgeRange } from '@/utils/getAgeRange';
import PopularAgeRangeGraph from './PopularAgeRangeGraph';
import PopularInformation from './PopularInformation';
import PopularGenderGraph from './PopularGenderGraph';

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
    <div>
      <PopularInformation
        popularGender={popularGender}
        popularAgeRange={getAgeRange(popularAgeRange)}
      />
      <PopularAgeRangeGraph
        popularAgeRange={popularAgeRange}
        popularAgeRangePercents={popularAgeRangePercents}
      />
    </div>
  );
}
