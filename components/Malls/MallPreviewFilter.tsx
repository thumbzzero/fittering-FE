import MallPreviewFilterLink from './MallPreviewFilterLink';

type Props = {
  isRanking: boolean;
};

export default function MallPreviewFilter({ isRanking }: Props) {
  return (
    <div className="flex gap-1.5 justify-center items-center text-center mt-4 mb-2">
      <MallPreviewFilterLink isRanking={true} isSelected={isRanking} />
      <MallPreviewFilterLink isRanking={false} isSelected={!isRanking} />
    </div>
  );
}
