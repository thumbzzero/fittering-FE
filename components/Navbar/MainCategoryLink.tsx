import Link from 'next/link';

type Props = {
  href: string;
  isSelected: boolean;
  name: string;
};

export default function MainCategoryLink({
  href,
  isSelected,
  name,
}: Props) {
  return (
    <Link
      href={href}
      className={
        'flex-1 text-center pb-2 font-semibold border-b ' +
        (isSelected
          ? 'border-main-color border-b-[2px] text-black'
          : 'text-custom-gray-800')
      }
    >
      {name}
    </Link>
  );
}
