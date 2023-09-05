'use client';

import { MallPreview } from '@/service/malls';
import MallPreviewImage from './MallPreviewImage';
import MallPreviewLogo from './MallPreviewLogo';
import MallPreviewDescription from './MallPreviewDescription';
import MallPreviewName from './MallPreviewName';
import StarButton from './StarButton';

type Props = {
  malls: MallPreview[];
};

export default function MallPreviewCard({ malls }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {malls.map((mall, index) => (
        <div
          key={mall.id}
          className="flex flex-col gap-4 rounded border px-2 py-3 md:px-4"
        >
          <div className="flex gap-4 md:gap-6 items-center relative">
            <span className="md:text-lg font-semibold">{index + 1}</span>
            <MallPreviewLogo name={mall.name} image={mall.image} />

            <div className="flex flex-col gap-1 max-w-[55%] xs:max-w-[65%] md:max-w-[75%]">
              <MallPreviewName name={mall.name} />
              <MallPreviewDescription description={mall.description} />
            </div>

            <StarButton mallId={mall.id} initialFavorite={mall.isFavorite} />
          </div>

          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {mall.products.map((product) => (
              <MallPreviewImage
                key={product.productId}
                productImage={product.productImage}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
