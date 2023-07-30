import Image from 'next/image';
import Link from 'next/link';
import pencil from '/public/icon/pencil_white.svg';
import ruler from '/public/icon/ruler_white.svg';

const linkStyle =
  'w-full h-full text-sm text-center text-white w-40 rounded w-full py-3 text-md md:p-2 md:w-48';

export default function UserEditLinks() {
  return (
    <div className="relative flex flex-col gap-4 md:justify-end md:items-end mt-10 md:mt-6 md:flex-row md:bottom-4">
      <Link className={`${linkStyle} bg-main-color`} href="/user/edit">
        <Image className="inline-block w-4 h-4 mr-3" src={pencil} alt="" />
        회원정보 수정
      </Link>
      <Link className={`${linkStyle} bg-button-black`} href="/user/mysize">
        <Image className="inline-block w-4 h-4 mr-3" src={ruler} alt="" /> 내
        맞춤 정보 설정
      </Link>
    </div>
  );
}
