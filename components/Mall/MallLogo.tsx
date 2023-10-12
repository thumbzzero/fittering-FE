import Image from 'next/image';

type Props = {
  src: string;
  name: string;
};

export default function MallLogo({ src, name }: Props) {
  return (
    <div className="flex flex-col text-center">
      <Image
        className="w-24 h-24 md:w-36 md:h-36 border rounded p-1 object-contain"
        src={src}
        alt={`${name} 쇼핑몰 로고`}
        width={200}
        height={200}
      />
    </div>
  );
}
