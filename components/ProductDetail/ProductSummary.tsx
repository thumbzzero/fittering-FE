'use client';

import { Product } from '@/service/product';
import Image from 'next/image';
import ProductDescription from './ProductDescription';
import ProductGraphs from './ProductGraphs';

type Props = {
  product: Product;
};

export default function ProductSummary({ product }: Props) {
  const {
    favoriteCount,
    isFavorite,
    view,
    productImage,
    productName,
    productGender,
    price,
    mallName,
    origin,
    popularGender,
    popularAgeRange,
    popularAgeRangePercents,
    popularGenderPercents,
  } = product;

  const description = {
    mallName,
    isFavorite,
    origin,
    productName,
    productGender,
    favoriteCount,
    view,
    popularAgeRange,
    price,
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      <Image
        className="flex-[0.35] w-full mx-auto"
        src={productImage}
        alt={`${productName} 이미지`}
        width={300}
        height={300}
      />
      <div className="flex-[0.65] flex flex-col gap-4">
        <ProductDescription description={description} />
        <ProductGraphs
          popularGender={popularGender}
          popularAgeRange={popularAgeRange}
          popularAgeRangePercents={popularAgeRangePercents}
          popularGenderPercents={popularGenderPercents}
        />
      </div>
    </div>
  );
}
