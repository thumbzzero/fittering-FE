import Image from 'next/image';

type Props = {
  src: string;
};

export default function DetailImage({ src }: Props) {
  return (
    <Image
      className="mt-4 mx-auto w-full md:w-2/3"
      src={src}
      alt=""
      width={200}
      height={200}
    />
  );
}
