import Image from 'next/image';

type Props = {
  src: string;
};

export default function MallLogo({ src }: Props) {
  return (
    <div className="flex flex-col text-center">
      <Image
        className="w-24 h-24 md:w-36 md:h-36 border rounded p-1 object-contain"
        src={src}
        alt=""
        width={200}
        height={200}
      />
    </div>
  );
}
