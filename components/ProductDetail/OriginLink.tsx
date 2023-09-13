import Image from 'next/image';
import Link from 'next/link';
import linkIcon from '/public/icon/link_gray.svg';

type Props = {
  origin: string;
};

export default function OriginLink({ origin }: Props) {
  return (
    <Link className='inline-block w-7 h-7 sm:w-8 sm:h-8 sm:absolute sm:right-0' href={origin ?? '/'} target="_blank">
      <Image src={linkIcon} alt="" />
    </Link>
  );
}
