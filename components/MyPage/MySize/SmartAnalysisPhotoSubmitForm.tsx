'use client';

import { getSilhouetteImage } from '@/service/mysize';
import Image from 'next/image';
import plus from 'public/icon/plus_white.svg';
import { useRef } from 'react';

type Props = {
  photoType: 'FRONT' | 'SIDE';
  imageUrl : string | null;
  setImageUrl : React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SmartAnalysisPhotoSubmitForm({ photoType, imageUrl, setImageUrl }: Props) {
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImageInputClick = () => {
    imageInput.current?.click();
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('bodyFile', file);
      const imageUrl = await getSilhouetteImage(photoType, formData);
      setImageUrl(imageUrl);
    }
  };

  return (
    <div
      onClick={handleImageInputClick}
      className="flex flex-col gap-4 items-center justify-center border rounded-lg w-full h-[54vh] text-center"
    >
      {imageUrl === null ? (
        <>
          <form encType="multipart/form-data">
            <input
              className="hidden"
              type="file"
              accept=".jpg, .jpeg, .png"
              ref={imageInput}
              onChange={handleFileUpload}
            />
          </form>
          <button className="bg-main-color text-white text-[3rem] rounded-full w-16 h-16">
            <Image className="mx-auto" src={plus} alt="+" />
          </button>
          <span className="text-main-color">
            {photoType === 'FRONT' ? '정면' : '측면'} 사진 등록
          </span>
        </>
      ) : (
        <Image
          className="w-full h-full p-4 rounded-sm object-contain"
          src={imageUrl}
          alt="실루엣 사진"
          width={200}
          height={200}
        />
      )}
    </div>
  );
}
