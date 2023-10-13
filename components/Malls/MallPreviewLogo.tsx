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
      aria-label={`${name} 쇼핑몰 페이지로 이동`}
    >
      <Image
        className="w-full h-full rounded-full object-contain"
        src={image}
        alt={`${name.split(' ').join('').toLowerCase()} 쇼핑몰 로고`}
        width={100}
        height={100}
      />
    </Link>
  );
}
