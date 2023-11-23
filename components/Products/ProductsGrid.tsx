'use client';
import Product from '@/components/Product';
import { ProductPreview } from '@/types/product';
import RankLabel from '@/components/MainPage/RankLabel';

type Props = {
  products: ProductPreview[];
  isRank?: boolean;
};

export default function ProductsGrid({ products, isRank }: Props) {
  return (
    <ul className="grid gap-4 mt-4 grid-cols-2 sm:grid-cols-4 overflow-hidden items-center">
      {products?.map((product, index) => (
        <li key={product.productId}>
          <Product product={product}>
            {isRank && index <= 2 && <RankLabel rank={index + 1} />}
          </Product>
        </li>
      ))}
    </ul>
  );
}
