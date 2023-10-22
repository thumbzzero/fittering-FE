import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  name: string;
  image: string;
  keyword: string;
};

export default function SearchKeyword({ href, name, image, keyword }: Props) {
  const keywordIndex = name.indexOf(keyword);
  return (
    <li className="text-xs sm:text-sm pl-4 py-1 hover:bg-gray-50">
      <Link className="flex gap-2" href={href}>
        <Image
          className="object-contain"
          src={image}
          alt=""
          width={10}
          height={10}
        />
        <div>
          <span>{`${name.substring(0, keywordIndex)}`}</span>
          <span className="font-semibold">{`${name.substring(
            keywordIndex,
            keywordIndex + keyword.length
          )}`}</span>
          <span className="truncate">{`${name.substring(
            keywordIndex + keyword.length
          )}`}</span>
        </div>
      </Link>
    </li>
  );
}
