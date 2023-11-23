import ProductDetails from "@/components/ProductDetail/ProductDetails";

type Props = {
  params: {
    productId: string;
  };
};

function ProductPage({ params: { productId } }: Props) {
  return (
    <div className='mb-8'>
      <ProductDetails productId={parseInt(productId)} />
    </div>
  );
}

export default ProductPage;
