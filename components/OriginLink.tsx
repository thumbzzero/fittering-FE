import Image from 'next/image';
import Link from 'next/link';
import linkIcon from '/public/icon/link_gray.svg';

type Props = {
  origin: string;
  isMallPage?: boolean;
};

export default function OriginLink({ origin, isMallPage }: Props) {
  return (
    <Link
      className={`inline-block w-7 h-7 sm:w-8 sm:h-8 ${
        isMallPage ? '' : 'sm:absolute'
      } sm:right-0`}
      href={origin ?? '/'}
      target="_blank"
    >
      <Image src={linkIcon} alt="상품 원본 링크 버튼" />
    </Link>
  );
}
