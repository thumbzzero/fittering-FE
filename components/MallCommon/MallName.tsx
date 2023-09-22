import Link from 'next/link';

type Props = {
  name: string;
  isMallPage?: boolean;
};

export default function MallName({ name, isMallPage }: Props) {
  return (
    <Link
      className={`inline ${isMallPage ? 'text-sm xs:text-base md:text-lg' : 'text-xl md:text-2xl'} font-semibold truncate pr-1`}
      href={`/malls/${name?.split(' ').join('').toLowerCase()}`}
    >
      {name}
    </Link>
  );
}
