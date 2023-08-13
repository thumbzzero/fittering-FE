import Link from 'next/link';

type Props = {
  href: string;
  guide: string;
};

export default function LinkButton({ href, guide }: Props) {
  return (
    <Link
      className="inline-block bg-main-color text-white text-sm rounded-lg font-semibold w-48 md:w-60 py-2.5 sm:py-3 mb-4"
      href={href}
    >
      {guide}
    </Link>
  );
}
