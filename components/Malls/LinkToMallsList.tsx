import Link from 'next/link';

export default function LinkToMallsList() {
  return (
    <div className="text-right mb-2">
      <Link
        href="/malls/list"
        className="text-xs text-custom-gray-400"
      >{`쇼핑몰 전체 보기 >`}</Link>
    </div>
  );
}
