import Link from 'next/link';

type Props = {
  href: string;
  isSelected: boolean;
  name: string;
};

export default function SubCategoryLink({ href, isSelected, name }: Props) {
  const gender = localStorage.getItem('GLOBAL_FILTER');
  if (gender === 'M' && href.includes('/skirt')) return null;

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
