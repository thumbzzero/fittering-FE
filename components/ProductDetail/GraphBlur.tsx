import Image from 'next/image';
import chartExample from '/public/chart_example.png';

export default function GraphBlur() {
  return (
    <>
      <Image
        className="absolute p-2 w-full h-full object-contain"
        src={chartExample}
        alt=""
      />
      <div className="absolute bg-white opacity-80 blur-sm w-full h-full text-center align-middle py-10 md:py-12 lg:py-24"></div>
      <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-custom-gray-800 text-sm md:text-base">
        데이터 집계 중입니다.
      </span>
    </>
  );
}
