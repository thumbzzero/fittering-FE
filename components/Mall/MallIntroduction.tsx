'use client';

import { Mall } from '@/service/malls';
import { useEffect, useState } from 'react';
import { getMall } from '@/service/malls';

type Props = {
  mallId: Promise<number>;
};

export default function MallIntroduction({ mallId }: Props) {
  const [mall, setMall] = useState<Mall>({} as Mall);
  useEffect(() => {
    async function getMallData() {
      const mall = await getMall(await mallId);
      setMall(mall);
    }
    getMallData();
  }, [mallId]);

  return <div></div>;
}
