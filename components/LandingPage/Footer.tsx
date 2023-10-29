import Link from 'next/link';

export default function Footer() {
  return (
    <div className="text-center py-12">
      <h3 className="mb-8 text-lg xs:text-2xl font-semibold">
        지금 Fittering을 만나보세요!
      </h3>
      <div className="align-center align-middle">
        <Link
          className="text-sm xs:text-base font-semibold bg-main-color text-white rounded px-12 py-3 h-20 leading-20"
          href="https://fit-tering.com/signup"
          role="button"
        >
          Fittering 시작하기
        </Link>
      </div>
    </div>
  );
}
