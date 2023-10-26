'use client';

import { ProductPreview } from '@/service/product';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  product: ProductPreview;
  children?: React.ReactNode;
};

export default function Product({
  product: { productId, productImage, productName, price, mallName },
  children,
}: Props) {
  return (
    <>
      <div className="relative w-[calc((100vw-3rem)/2)] h-[calc((100vw-3rem)/2)] sm:w-[calc((100vw-5rem)/4)] sm:h-[calc((100vw-5rem)/4)] lg:w-[calc((1024px-3rem)/4)] lg:h-[calc((1024px-3rem)/4)] mb-2 mx-auto">
        {children}
        <Link
          href={`/products/${productId}`}
          aria-label={`${productName} 상세 보기로 이동`}
        >
          <Image
            className="w-full h-full rounded-lg object-contain mx-auto border border-custom-gray-100"
            src={productImage}
            alt={`${productName} 상품`}
            width={250}
            height={250}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <Link
          className="block font-semibold text-sm"
          href={`/malls/${mallName}`}
          aria-label={`${mallName} 쇼핑몰로 이동`}
        >
          {mallName}
        </Link>
        <Link
          className="block text-xs truncate"
          href={`products/${productId}`}
          aria-label={`${productName} 상세 보기로 이동`}
        >
          {productName}
        </Link>
        <span className="font-semibold text-xs">{price.toLocaleString()}</span>
      </div>
    </>
  );
}
