import GlobalFilter from '@/components/GlobalFilter';
import QuickMenu from '@/components/QuickMenu';
import SearchResult from '@/components/Products/SearchResult';

type Props = {
  searchParams: { [keyword: string]: string | undefined };
};

function SearchPage({ searchParams: { keyword } }: Props) {
  return (
    <div>
      <h1 className="text-sm sm:text-lg font-semibold mt-8 mb-2">
        <span className="text-base sm:text-xl text-main-color">{`'${keyword}'`}</span>
        에 대한 검색 결과
      </h1>
      <SearchResult keyword={keyword} />
      <GlobalFilter />
      <QuickMenu />
    </div>
  );
}

export default SearchPage;
