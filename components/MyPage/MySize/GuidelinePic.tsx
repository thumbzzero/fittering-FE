import Image from 'next/image';
import guideline from '/public/guideline.png';

export default function GuidelinePic() {
  return (
    <div className="flex-1 flex flex-col w-full">
      <div className="font-semibold pb-6">가이드라인 사진 예시</div>
      <Image
          className='w-auto h-full border rounded-lg overflow-hidden object-contain'
          src={guideline}
          alt="체형 정보 가이드라인"
      />
    </div>
  );
}
