import Link from 'next/link';

type Props = {
  href: string;
  isSelected: boolean;
  name: string;
};

export default function SubCategoryLink({ href, isSelected, name }: Props) {
  return (
    <Link
      href={href}
      className={
        isSelected ? 'font-semibold text-main-color' : 'text-custom-gray-800'
      }
    >
      {name}
    </Link>
  );
}
