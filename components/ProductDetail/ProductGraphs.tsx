import { getAgeRange } from '@/utils/getAgeRange';
import PopularAgeRangeGraph from '@/components/ProductDetail/PopularAgeRangeGraph';
import PopularInformation from '@/components/ProductDetail/PopularInformation';
import PopularGenderGraph from '@/components/ProductDetail/PopularGenderGraph';
import GraphBlur from '@/components/ProductDetail/GraphBlur';

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
      <div className={`relative flex flex-col md:flex-row gap-4 ${popularGender === '' && 'h-40 md:h-52'}`}>
        {popularGender === '' ? (
          <GraphBlur />
        ) : (
          <>
            <PopularAgeRangeGraph
              popularAgeRange={popularAgeRange}
              popularAgeRangePercents={popularAgeRangePercents}
            />
            <PopularGenderGraph popularGenderPercents={popularGenderPercents} />
          </>
        )}
      </div>
    </div>
  );
}
