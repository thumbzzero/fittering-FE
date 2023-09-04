'use client';

import MallPreviewCard from '@/components/Malls/MallPreviewCard';
import { getMalls, MallPreview } from '@/service/malls';
import { useState, useEffect } from 'react';

type Props = {
  isRanking: boolean;
};

export default function MallsList({ isRanking }: Props) {
  const [malls, setMalls] = useState<MallPreview[]>([]);

  useEffect(() => {
    async function fetchMalls() {
      const data = await getMalls(isRanking ? 'rank' : 'favorite_malls');
      setMalls(data);
    }
    fetchMalls();
  }, [isRanking]);
  return <MallPreviewCard malls={malls} />;
}
