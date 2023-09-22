'use client';

import { Mall } from '@/service/malls';
import { useEffect, useState } from 'react';
import { getMall } from '@/service/malls';
import MallLogo from './MallLogo';
import OriginLink from '../OriginLink';
import StarButton from '../MallCommon/StarButton';
import MallDescription from '../MallCommon/MallDescription';
import MallName from '../MallCommon/MallName';
import MobileMallIntroduction from './MobileMallIntroduction';

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

  return (
    <div className="relative mt-4 mb-8">

      {/* mobile */}
      <div className="md:hidden">
        <MobileMallIntroduction
          src={mall.image}
          name={mall.name}
          description={mall.description}
        />
      </div>

      {/* web */}
      <div className="hidden md:flex md:flex-row md:gap-4 md:items-center">
        <MallLogo src={mall.image} />
        <div className="flex flex-col gap-2">
          <MallName name={mall.name} />
          <MallDescription description={mall.description} isMallPage={true} />
        </div>
      </div>

      {/* common */}
      <div className="absolute top-0 right-0 flex gap-1 justify-center items-center">
        <StarButton
          mallId={mall.id}
          initialFavorite={mall.isFavorite}
          isMallPage={true}
        />
        <OriginLink origin={mall.url} isMallPage={true} />
      </div>
      
    </div>
  );
}
