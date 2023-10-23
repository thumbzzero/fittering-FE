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
      className="flex items-center gap-2 text-xs sm:text-sm pl-4 py-1 hover:bg-gray-50"
    >
      <Image
        className="object-contain"
        src={image}
        alt=""
        width={30}
        height={30}
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
    </li>
  );
}