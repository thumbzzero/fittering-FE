'use client';

import SmartAnalysisPhotoSubmitForm from '@/components/MyPage/MySize/SmartAnalysisPhotoSubmitForm';
import { MySize, smartAnalysis } from '@/service/mysize';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mySizeActions } from '@/store/mySizeSlice';

export default function SmartAnalysisForm() {
  const [isPrepared, setIsPrepared] = useState(false);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const mySize: MySize = useAppSelector((state) => state.mySize);
  const user = useAppSelector((state) => state.myPage);

  const router = useRouter();

  useEffect(() => {
    if (mySize.height === null || mySize.weight === null) {
      window.alert('스마트 분석 기능을 이용하려면 키와 몸무게를 입력해주세요.');
      router.replace('/user/mysize/edit');
      return;
    }
  }, [mySize.height, mySize.weight, router]);

  useEffect(() => {
    setIsPrepared(frontImage !== null && sideImage !== null);
  }, [frontImage, sideImage]);

  const handleSmartAnalysis = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const response = await smartAnalysis({
      front: frontImage?.split('/')[4] ?? '',
      side: sideImage?.split('/')[4] ?? '',
      height: mySize.height ?? 0,
      weight: mySize.weight ?? 0,
      sex: user.gender,
    });

    if (response.ok) {
      window.alert(
        '스마트 분석을 완료하였습니다. 분석 결과를 확인 후 저장해주세요.'
      );
      const data: MySize = await response.json();
      dispatch(mySizeActions.setMySize(data));
      router.replace('/user/mysize/edit');
    } else {
      window.alert('스마트 분석에 실패하였습니다.');
      setFrontImage(null);
      setSideImage(null);
      setIsPrepared(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <SmartAnalysisPhotoSubmitForm
          photoType="FRONT"
          imageUrl={frontImage}
          setImageUrl={setFrontImage}
        />
        <SmartAnalysisPhotoSubmitForm
          photoType="SIDE"
          imageUrl={sideImage}
          setImageUrl={setSideImage}
        />
      </div>
      {isPrepared && (
        <button
          className="w-full md:w-[10rem] mt-8 md:mt-12 py-2 block mx-auto bg-main-color text-white rounded-lg"
          onClick={handleSmartAnalysis}
        >
          분석하기
        </button>
      )}
    </>
  );
}
