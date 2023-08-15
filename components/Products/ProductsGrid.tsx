'use client';

import { ProductPreview } from '@/service/product';
import Product from '@/components/Product';

type Props = {
  products: ProductPreview[];
};

export default function ProductsGrid({ products }: Props) {
  return (
    <ul className="grid gap-4 mt-4 grid-cols-4 overflow-hidden items-center">
      {products.map((product) => (
        <li key={product.productId}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
}
