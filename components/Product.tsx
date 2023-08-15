'use client';

import { ProductPreview } from '@/service/product';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  product: ProductPreview;
};

export default function Product({
  product: { productId, productImage, productName, price, mallName },
}: Props) {
  return (
    <>
      <div className="w-[calc((100vw-3rem)/2)] h-[calc((100vw-3rem)/2)] sm:w-[calc((100vw-5rem)/4)] sm:h-[calc((100vw-5rem)/4)] lg:w-[calc((1024px-3rem)/4)] lg:h-[calc((1024px-3rem)/4)] mb-2 mx-auto">
        <Link href={`/products/${productId}`}>
          <Image
            className="w-full h-full p-2 rounded-lg object-contain mx-auto border border-custom-gray-100"
            src={productImage}
            alt={`${productName} 상품 이미지`}
            width={250}
            height={250}
          />
        </Link>
      </div>
      <Link className="block font-semibold text-sm" href={`/malls/${mallName}`}>
        {mallName}
      </Link>
      <Link className="block text-xs" href={`products/${productId}`}>
        {productName}
      </Link>
      <span className="font-semibold text-xs">{price.toLocaleString()}</span>
    </>
  );
}
