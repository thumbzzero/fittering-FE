import Image from 'next/image';

type Props = {
  type: '이전' | '다음';
  arrowSrc: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PagingArrowButton({
  type,
  arrowSrc,
  isActive,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full border h-5 w-5 xs:h-6 xs:w-6 mx-[5px] ${
        isActive ? '' : 'hidden'
      }`}
      type="button"
      aria-label={`${type} 페이지 보기`}
    >
      <Image
        className="absolute translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] inline object-center"
        src={arrowSrc}
        alt=""
        aria-hidden={true}
      />
    </button>
  );
}
