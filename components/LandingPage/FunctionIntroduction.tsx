import { functions } from '@/constants/functions';
import Image from 'next/image';

export default function FunctionIntroduction() {
  return (
    <>
      {functions.map((f, index) => (
        <div
          className={`text-center px-4 md:px-0 py-10 md:py-20 ${
            index % 2 ? '' : 'bg-custom-gray-50'
          }`}
          key={index}
        >
          <h2 className="my-4 text-2xl xs:text-3xl md:text-4xl font-semibold break-keep">
            {f.introduction}
          </h2>
          <p className="text-sm sm:text-lg text-custom-gray-800 break-keep">
            {f.description}
          </p>
          <Image
            className="mx-auto my-8 shadow"
            src={f.image}
            alt=""
            width={800}
          />
        </div>
      ))}
    </>
  );
}
