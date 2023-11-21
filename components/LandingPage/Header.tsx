import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/Fittering_logo.png';

export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-white shadow h-20">
      <div className="relative mx-auto px-4 lg:px-0 max-w-screen-lg py-4">
        <h1>
          <span className='block overflow-hidden absolute top-0 left-0 w-0 h-0 border-0'>
            핏터링
          </span>
          <Link href="https://fit-tering.com" aria-label="랜딩페이지로 이동">
            <Image
              className="w-[auto] h-[2.7rem] md:h-[3rem]"
              src={logo}
              alt="핏터링 로고"
            />
          </Link>
        </h1>
        <div className="absolute top-[50%] translate-y-[-50%] right-2 align-center text-center align-middle">
          <Link
            className="text-sm xs:text-base font-semibold bg-main-color text-white rounded px-6 py-2 h-20 leading-20"
            href="https://fit-tering.com/login"
            role="button"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
