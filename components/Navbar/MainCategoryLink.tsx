import Link from 'next/link';

type Props = {
  key: number;
  href: string;
  isSelected: boolean;
  name: string;
};

export default function MainCategoryLink({
  key,
  href,
  isSelected,
  name,
}: Props) {
  return (
    <Link
      key={key}
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
