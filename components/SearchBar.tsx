'use client';

import Image from 'next/image';
import search from '/public/icon/search_green.svg';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import SearchKeywords from './SearchKeywords';
import { getSearchKeywords, Keywords } from '@/service/search';

export default function SearchBar() {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const router = useRouter();

  const [searchInput, setSearchInput] = useState(
    pathname === '/search' ? searchParam.get('keyword') ?? '' : ''
  );
  const [keyword, setKeyword] = useState('');
  const [keywords, setKeywords] = useState<Keywords>({
    products: [],
    malls: [],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    async function fetchSearchKeywords() {
      const keywords = await getSearchKeywords(keyword);
      setKeywords(keywords);
    }

    if (keyword) fetchSearchKeywords();
    else setKeywords({ products: [], malls: [] });
  }, [keyword]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?keyword=${searchInput}`);
  };

  return (
    <div className="relative w-[78%] xs:w-[80%] md:w-[50%] flex flex-col">
      <form onSubmit={handleSearch} className="w-11/12 md:w-full">
        <input
          className="border-[0.5px] bg-custom-gray-50 rounded right-0 w-full h-9 md:h-10 pl-4 text-xs absolute top-[50%] translate-y-[-50%]"
          type="text"
          placeholder="검색어를 입력하세요."
          onChange={handleKeywordChange}
          value={searchInput}
        />
        <button
          className="absolute right-0 md:right-1 top-[50%] translate-y-[-50%] md:r-1/12"
          aria-label="검색하기"
        >
          <Image src={search} alt="검색 버튼" aria-hidden={true} />
        </button>
      </form>
      <div
        className={`z-10 absolute top-[3.25rem] md:top-[3.75rem] w-full rounded-bl rounded-br bg-white shadow-lg`}
      >
        <SearchKeywords
          keyword={keyword}
          keywords={{ type: 'malls', data: keywords.malls }}
        />
        <SearchKeywords
          keyword={keyword}
          keywords={{ type: 'products', data: keywords.products }}
        />
      </div>
    </div>
  );
}
