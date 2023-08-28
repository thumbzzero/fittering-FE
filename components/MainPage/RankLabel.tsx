type Props = {
  rank: number;
};

export default function RankLabel({ rank }: Props) {
  return (
    <span className="absolute top-2 left-2 px-3 py-1.5 text-xs font-semibold bg-bean-head-color text-main-color rounded-lg">
      {rank}위
    </span>
  );
}
