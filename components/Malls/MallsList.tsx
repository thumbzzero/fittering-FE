'use client';

import MallPreviewCard from '@/components/Malls/MallPreviewCard';
import { getMalls, MallPreview } from '@/service/malls';
import { useState, useEffect } from 'react';

type Props = {
  previewType: 'rank' | 'favorite_malls' | 'preview/list';
};

export default function MallsList({ previewType }: Props) {
  const [malls, setMalls] = useState<MallPreview[]>([]);

  useEffect(() => {
    async function fetchMalls() {
      const data = await getMalls(previewType);
      setMalls(data);
    }
    fetchMalls();
  }, [previewType]);
  return <MallPreviewCard malls={malls} />;
}
