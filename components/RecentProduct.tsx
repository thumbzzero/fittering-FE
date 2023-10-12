'use client';

import { ProductPreview } from '@/service/product';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  product: ProductPreview;
};

export default function RecentProduct({
  product: { productId, productImage, productName, price, mallName },
}: Props) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <div className="flex-[0.4] mx-auto w-full relative after:block after:pb-[100%] ">
        <Link href={`/products/${productId}`}>
          <Image
            className="w-full h-full rounded-lg object-contain mx-auto border border-custom-gray-100 absolute top-0 left-0"
            src={productImage}
            alt={`${productName} 상품`}
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="flex-[0.6] flex flex-col gap-2">
        <Link
          className="block font-semibold text-sm"
          href={`/malls/${mallName}`}
        >
          {mallName}
        </Link>
        <Link className="block text-xs" href={`products/${productId}`}>
          {productName}
        </Link>
        <span className="font-semibold text-xs">{price.toLocaleString()}</span>
      </div>
    </div>
  );
}
