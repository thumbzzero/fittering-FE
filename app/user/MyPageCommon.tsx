import Image from 'next/image';
import Link from 'next/link';
import pencil from '/public/icon/pencil_white.svg';
import ruler from '/public/icon/ruler_white.svg';
import back from 'public/icon/left_black.svg';

const blank = 'px-4 md:px-10 lg:px-48';

const linkStyle =
  'w-full h-full text-center text-white w-40 rounded w-full py-3 text-md md:p-2 md:w-48';

export default function MyPageCommon() {
  return (
    <div className={`bg-bean-head-color h-72 md:h-36 ${blank}`}>
      <div className="py-4 text-center md:text-left md:pb-0">
        <Image
          className="absolute left-2 inline-block md:hidden"
          src={back}
          alt="<"
        />
        <span className="inline-block md:text-left font-bold">My Page</span>
      </div>
      <div className="mt-2">
        <span className="font-bold text-xl md:text-2xl">
          열졍콩님, <br className="md:hidden" />
          안녕하세요
        </span>
        <span className="absolute right-4 text-custom-gray-800 font-bold underline decoration-custom-gray-800 md:hidden">
          로그아웃
        </span>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mt-6 md:flex-row md:absolute md:top-32 md:right-10 lg:right-48">
        <Link className={`${linkStyle} bg-main-color`} href="/user/edit">
          <Image className="inline-block w-4 h-4 mr-3" src={pencil} alt="" />
          회원정보 수정
        </Link>
        <Link
          className={`${linkStyle} bg-button-black`}
          href="/user/mysize/edit"
        >
          <Image className="inline-block w-4 h-4 mr-3" src={ruler} alt="" /> 내
          맞춤 정보 설정
        </Link>
      </div>
    </div>
  );
}
