'use client';

import { getRankedMallPreview, MallRankingPreview } from '@/service/malls';
import RankedMallPreviewGrid from './RankedMallPreviewGrid';
import { useEffect, useState } from 'react';
import LinkButton from '../LinkButton';

export default function RankedMallPreview() {
  const [malls, setMalls] = useState<MallRankingPreview[]>([]);
  useEffect(() => {
    async function fetchMall() {
      const data = await getRankedMallPreview();
      setMalls(data);
    }
    fetchMall();
  }, []);
  return (
    <div className="w-full p-4 my-2 rounded border border-custom-gray-400 text-center">
      {malls.length > 0 ? (
        <RankedMallPreviewGrid malls={malls} />
      ) : (
        <>
          <span className="block text-custom-gray-800 my-4 text-sm">
            방문한 쇼핑몰이 없습니다.
          </span>
          <LinkButton href="/malls/list" guide="쇼핑몰 전체 보기" />
        </>
      )}
    </div>
  );
}
