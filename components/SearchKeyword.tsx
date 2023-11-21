'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  name: string;
  image: string;
  keyword: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchKeyword({
  href,
  name,
  image,
  keyword,
  setSearchInput,
  setKeyword,
}: Props) {
  const keywordIndex = name.indexOf(keyword);
  const router = useRouter();

  const handleKeywordClick = () => {
    router.push(href);
    setSearchInput('');
    setKeyword('');
  };
  return (
    <li
      onClick={handleKeywordClick}
      className="flex items-center gap-2 text-xs sm:text-sm px-4 py-1 hover:bg-gray-50"
    >
      <Image
        className="object-contain"
        src={image}
        alt=""
        width={30}
        height={30}
        aria-hidden={true}
      />
      <span className='block overflow-hidden absolute top-0 left-0 w-0 h-0 border-0'>
        {name}
      </span>
      <div className='truncate' aria-hidden={true}>
        <span>{`${name.substring(0, keywordIndex)}`}</span>
        <span className="font-semibold">{`${name.substring(
          keywordIndex,
          keywordIndex + keyword.length
        )}`}</span>
        <span>{`${name.substring(
          keywordIndex + keyword.length
        )}`}</span>
      </div>
    </li>
  );
}
