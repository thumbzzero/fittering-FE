import { getGenderData } from '../../utils/getGenderData';

type Props = {
  popularGender: string;
  popularAgeRange: string;
};

export default function PopularInformation({
  popularGender,
  popularAgeRange,
}: Props) {
  const popularGenderData = getGenderData(popularGender);
  const genderColor =
    popularGender === 'M' ? 'text-male-color' : 'text-female-color';
  return (
    <div className="font-semibold">
      <span>{`${popularAgeRange}, `}</span>
      <span
        className={popularGender === '' ? '' : genderColor}
      >
        {popularGender === '' ? '- ' : popularGenderData}
      </span>
      <span>에게 인기 많은 제품</span>
    </div>
  );
}
