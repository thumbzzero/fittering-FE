'use client';

import Slider from 'react-slick';
import Product from '@/components/Product';
import { ProductPreview } from '@/types/product';

type Props = {
  products: ProductPreview[];
};

export default function ProductSlider({ products }: Props) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="h-full mb-12">
      <Slider {...settings}>
        {products.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </Slider>
    </div>
  );
}
