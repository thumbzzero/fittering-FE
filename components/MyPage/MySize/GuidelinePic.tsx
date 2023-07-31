import Image from 'next/image';
import guideline1 from 'public/Fittering_logo.png';
import guideline2 from 'public/Fittering_logo.png';

const guidelinePicStyle =
  'w-auto h-full border rounded-lg overflow-hidden object-contain';

export default function GuidelinePic() {
  return (
    <div className="flex-1 flex flex-col w-full">
      <div className="font-semibold pb-6">가이드라인 사진 예시</div>
      <div className="flex gap-4 w-full h-72 md:h-[22rem] items-center justify-center">
        <Image className={guidelinePicStyle} src={guideline1} alt="" />
        <Image className={guidelinePicStyle} src={guideline2} alt="" />
      </div>
    </div>
  );
}
