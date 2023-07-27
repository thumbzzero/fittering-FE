import { getRankedMallPreview } from '@/service/malls';
import RankedMallPreviewGrid from './RankedMallPreviewGrid';

export default async function RankedMallPreview() {
  const malls = await getRankedMallPreview();
  return (
    <div className="w-full p-4 my-2 rounded border border-custom-gray-400">
      <RankedMallPreviewGrid malls={malls} />
    </div>
  );
}
