import Link from 'next/link';

type Props = {
  name: string;
};

export default function MallPreviewName({ name }: Props) {
  return (
    <Link
      className="inline text-sm xs:text-base md:text-lg font-semibold truncate pr-1"
      href={`/malls/${name.split(' ').join('').toLowerCase()}`}
    >
      {name}
    </Link>
  );
}
