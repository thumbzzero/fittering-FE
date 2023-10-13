import Link from 'next/link';

type Props = {
  isRanking: boolean;
  isSelected: boolean;
};

export default function MallPreviewFilterLink({
  isRanking,
  isSelected,
}: Props) {
  return (
    <Link
      className={`flex-1 py-1.5 ${
        isSelected
          ? 'font-semibold border-main-color border-b-[2px]'
          : 'border-b'
      } `}
      href={`/malls${!isRanking ? '/favorite_malls' : ''}`}
      aria-label={`${isRanking ? '자주 방문한 쇼핑몰' : '즐겨찾기한 쇼핑몰'} 보기로 이동`}
    >
      {isRanking ? '자주 방문한 쇼핑몰' : '즐겨찾기한 쇼핑몰'}
    </Link>
  );
}
