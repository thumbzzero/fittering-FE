import { guidelines } from '@/constants/guidelines';
import Image from 'next/image';
import frontGuideline from '/public/front_guideline.jpeg';
import sideGuideline from '/public/side_guideline.jpeg';

export default function Guideline() {
  return (
    <div>
      <h3 className="mt-8 font-semibold text-base">사진 가이드라인</h3>
      <div className="flex flex-col md:flex-row md:justify-start my-4 gap-4">
        <div className="flex-1 grid grid-cols-2 gap-2 md:flex-0">
          <Image
            className="rounded"
            src={frontGuideline}
            alt="정면 사진 촬영 가이드라인"
          />
          <Image
            className="rounded"
            src={sideGuideline}
            alt="측면 사진 촬영 가이드라인"
          />
        </div>

        <ul className="list-disc mx-4 md:mx-8">
          {guidelines.map((guideline, index) => (
            <li
              key={index}
              className={`py-1 text-sm ${
                guideline.isImportant && 'text-red-500'
              }`}
            >{`${guideline.text}`}</li>
          ))}
        </ul>
        <div className="flex-1" aria-hidden={true}></div>
      </div>
    </div>
  );
}
