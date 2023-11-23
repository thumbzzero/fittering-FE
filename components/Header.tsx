import Image from 'next/image';
import logo from '/public/Fittering_logo.png';
import { WebNavbar } from './Navbar/WebNavbar';
import Link from 'next/link';
import SearchBar from './SearchBar';
import LogoutButton from './LogoutButton';


export default function Header() {
  return (
    <div className="flex h-16 md:h-20">
      <div className="z-0 w-full border-b border-border-gray absolute left-0 top-16 md:top-20"></div>
      <div className="w-[22%] xs:w-[20%] md:w-[17%] relative">
        <h1>
          <Link href="https://fit-tering.com/home" aria-label="홈화면으로 이동">
            <Image
              className="w-full h-auto xs:w-[auto] xs:h-[2.7rem] md:h-[3rem] absolute top-[50%] translate-y-[-50%]"
              src={logo}
              alt="핏터링 로고"
            />
          </Link>
        </h1>
      </div>
      <SearchBar />
      <div className="hidden w-0 md:inline-block md:relative md:w-[33%]">
        <WebNavbar />
        <LogoutButton />
      </div>
    </div>
  );
}
