import { MallPreview } from '@/service/malls';
import MallPreviewCard from './MallPreviewCard';

type Props = { malls: MallPreview[] };

export default function RankedMallPreviewGrid({ malls }: Props) {
  return (
    <ul className="grid gap-4 h-32 md:h-48 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 overflow-hidden items-center">
      {malls.map((mall) => (
        <li key={mall.mallId}>
          <MallPreviewCard mall={mall} />
        </li>
      ))}
    </ul>
  );
}
