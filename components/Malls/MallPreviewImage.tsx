import Image from 'next/image';
import Link from 'next/link';

type Props = {
  productId: number;
  productImage: string;
  productName: string;
};

export default function MallPreviewImage({ productId, productImage, productName }: Props) {
  return (
    <div className="relative after:block after:pb-[100%]">
      <Link href={`/products/${productId}`}>
        <Image
          className="w-full h-full border rounded object-contain absolute top-0 left-0"
          src={productImage}
          alt={`${productName}`}
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
