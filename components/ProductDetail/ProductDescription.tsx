import { getGenderData } from '../../utils/getGenderData';

type Props = {
  description: {
    mallName: string;
    isFavorite: boolean;
    origin: string;
    productName: string;
    productGender: string;
    favoriteCount: number;
    view: number;
    popularAgeRange: number;
    price: number;
  };
};

export default function ProductDescription({
  description: {
    mallName,
    isFavorite,
    origin,
    productName,
    productGender,
    favoriteCount,
    view,
    popularAgeRange,
    price,
  },
}: Props) {
  const descriptions = [
    { label: '쇼핑몰', data: mallName },
    { label: '상품명', data: productName },
    { label: '성별', data: getGenderData(productGender) },
    { label: '좋아요', data: favoriteCount },
    { label: '조회수', data: view },
    { label: '인기 연령대', data: popularAgeRange ?? '-' },
    { label: '가격', data: `${price?.toLocaleString()}원` },
  ];
  return (
    <div>
      <table>
        <tbody>
          {descriptions.map((info, index) => (
            <tr key={index} className="text-[0.7rem] xs:text-sm">
              <td className="text-custom-gray-800 py-1 pr-8 align-top">
                {info.label}
              </td>
              <td className="font-medium py-1 align-top">{info.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
