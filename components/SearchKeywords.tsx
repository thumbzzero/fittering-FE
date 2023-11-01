'use client';

import { Malls, Products } from '@/service/search';
import SearchKeyword from './SearchKeyword';

type Props = {
  isKeywordsOpen: boolean;
  keyword: string;
  keywords:
    | {
        type: 'malls';
        data: Malls[];
      }
    | {
        type: 'products';
        data: Products[];
      };
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchKeywords({
  isKeywordsOpen,
  keyword,
  keywords: { type, data },
  setSearchInput,
  setKeyword,
}: Props) {
  if (!isKeywordsOpen) return null;
  if (data.length === 0) return null;

  return (
    <div>
      <span className="block text-xs pl-4 py-2 text-custom-gray-800">
        {type === 'malls' ? '쇼핑몰' : '상품'}
      </span>
      <ul className="">
        {data.map((result) => (
          <SearchKeyword
            key={result.id}
            href={`/${type}/${type === 'malls' ? result.name : result.id}`}
            name={result.name}
            image={result.image}
            keyword={keyword}
            setSearchInput={setSearchInput}
            setKeyword={setKeyword}
          />
        ))}
      </ul>
    </div>
  );
}
