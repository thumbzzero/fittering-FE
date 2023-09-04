import Image from "next/image";

type Props = {
  productImage: string;
};

export default function MallPreviewImage({ productImage }: Props) {
  return (
    <div
      className="relative after:block after:pb-[100%]"
    >
      <Image
        className="w-full h-full border rounded object-contain absolute top-0 left-0"
        src={productImage}
        alt=""
        width={100}
        height={100}
      />
    </div>
  );
}
