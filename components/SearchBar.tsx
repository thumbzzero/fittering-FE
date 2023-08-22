'use client';

import Image from 'next/image';
import search from '/public/icon/search_green.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?keyword=${keyword}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-[78%] xs:w-[80%] md:w-[50%]"
    >
      <input
        className="border-[0.5px] bg-custom-gray-50 rounded right-0 w-11/12 md:w-full h-9 md:h-10 pl-4 text-xs absolute top-[50%] translate-y-[-50%]"
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={handleKeywordChange}
        value={keyword}
      />
      <Image
        className="absolute right-0 md:right-1 top-[50%] translate-y-[-50%] md:r-1/12"
        src={search}
        alt=""
      />
    </form>
  );
}
