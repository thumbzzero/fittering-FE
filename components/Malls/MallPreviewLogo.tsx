import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  image: string;
};

export default function MallPreviewLogo({ name, image }: Props) {
  return (
    <Link
      className="w-12 h-12 md:w-24 md:h-24 rounded-full border"
      href={`/malls/${name.split(' ').join('').toLowerCase()}`}
    >
      <Image
        className="w-full h-full object-contain p-1 md:p-2"
        src={image}
        alt=""
        width={100}
        height={100}
      />
    </Link>
  );
}
