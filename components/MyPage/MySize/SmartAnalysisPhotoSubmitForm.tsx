import Image from 'next/image';
import plus from 'public/icon/plus_white.svg';

type Props = {
  photoType: 'FRONT' | 'SIDE';
};

export default function SmartAnalysisPhotoSubmitForm({ photoType }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center border rounded-lg w-full h-[54vh] text-center">
      <button className="bg-main-color text-white text-[3rem] rounded-full w-16 h-16">
        <Image className="mx-auto" src={plus} alt="+" />
      </button>
      <span className="text-main-color">
        {photoType === 'FRONT' ? '정면' : '측면'} 사진 등록
      </span>
    </div>
  );
}
