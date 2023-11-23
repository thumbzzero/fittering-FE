'use client';

import { ProductPreview } from '@/types/product';
import RecentProduct from '@/components/RecentProduct';

type Props = {
  products: ProductPreview[];
};

export default function RecentProductGrid({ products }: Props) {
  return (
    <ul className='grid gap-4 mt-4 grid-cols-3 overflow-hidden items-center'>
      {products.map((product) => (
        <li key={product.productId}>
          <RecentProduct product={product} />
        </li>
      ))}
    </ul>
  );
}
