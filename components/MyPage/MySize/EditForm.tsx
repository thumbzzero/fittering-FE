'use client';

import { editMySize, MySize } from '@/service/mysize';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { mySizeActions } from '@/store/mySizeSlice';
import { useState } from 'react';
import EditFormInput from './EditFormInput';
import { useRouter } from 'next/navigation';
import { MyPage } from '@/types/user';

type Props = {};

export default function EditForm(props: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const myPage: MyPage = useAppSelector((state) => state.myPage);
  const mySize: MySize = useAppSelector((state) => state.mySize);

  const [height, setHeight] = useState(mySize.height ?? null);
  const [weight, setWeight] = useState(mySize.weight ?? null);
  const [arm, setArm] = useState(mySize.arm ?? null);
  const [leg, setLeg] = useState(mySize.leg ?? null);
  const [shoulder, setShoulder] = useState(mySize.shoulder ?? null);
  const [waist, setWaist] = useState(mySize.waist ?? null);
  const [chest, setChest] = useState(mySize.chest ?? null);
  const [thigh, setThigh] = useState(mySize.thigh ?? null);
  const [hip, setHip] = useState(mySize.hip ?? null);

  const handleEditMySize = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (height === null || weight === null) {
      window.alert('키와 몸무게는 필수 입력 사항입니다.');
      return;
    }

    const updatedMySize: MySize = {
      height,
      weight,
      arm,
      leg,
      shoulder,
      waist,
      chest,
      thigh,
      hip,
    };

    const response = await editMySize(updatedMySize);
    if (response.ok) {
      window.alert('체형 정보가 수정되었습니다.');
      dispatch(mySizeActions.setMySize(updatedMySize));
      router.replace('/user/mysize');
    } else {
      window.alert('체형 정보 수정에 실패하였습니다.');
    }
  };

  return (
    <div className="flex-1 w-full h-full">
      <div className="font-semibold pb-6">{`${myPage.username}`}님의 체형</div>

      <form className="flex flex-col md:flex-row md:gap-12">
        <div className="flex-1">
          <EditFormInput
            bodyType="height"
            size={mySize.height}
            setSize={setHeight}
          />
          <EditFormInput
            bodyType="weight"
            size={mySize.weight}
            setSize={setWeight}
          />
          <EditFormInput bodyType="arm" size={mySize.arm} setSize={setArm} />
          <EditFormInput bodyType="leg" size={mySize.leg} setSize={setLeg} />
          <EditFormInput
            bodyType="shoulder"
            size={mySize.shoulder}
            setSize={setShoulder}
          />
        </div>

        <div className="flex-1">
          <EditFormInput
            bodyType="chest"
            size={mySize.chest}
            setSize={setChest}
          />
          <EditFormInput
            bodyType="waist"
            size={mySize.waist}
            setSize={setWaist}
          />
          <EditFormInput
            bodyType="thigh"
            size={mySize.thigh}
            setSize={setThigh}
          />
          <EditFormInput bodyType="hip" size={mySize.hip} setSize={setHip} />
        </div>
      </form>
      <button
        className="w-full md:w-[10rem] mt-8 md:mt-12 py-2 block mx-auto bg-main-color text-white rounded-lg"
        onClick={handleEditMySize}
      >
        저장
      </button>
    </div>
  );
}
