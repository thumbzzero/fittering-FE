'use client';

import { MySize } from '@/service/mysize';
import EditFormInput from './EditFormInput';

type Props = {
  mySize: MySize;
};

export default function EditForm({ mySize }: Props) {
  return (
    <div className="flex-1 w-full h-full">
      <div className="font-semibold pb-6">열졍콩님의 체형</div>

      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="flex-1">
          <EditFormInput bodyType="height" size={mySize.height} />
          <EditFormInput bodyType="weight" size={mySize.weight} />
          <EditFormInput bodyType="arm" size={mySize.arm} />
          <EditFormInput bodyType="leg" size={mySize.leg} />
          <EditFormInput bodyType="shoulder" size={mySize.shoulder} />
        </div>

        <div className="flex-1">
          <EditFormInput bodyType="chest" size={mySize.chest} />
          <EditFormInput bodyType="waist" size={mySize.waist} />
          <EditFormInput bodyType="thigh" size={mySize.thigh} />
          <EditFormInput bodyType="hip" size={mySize.hip} />
        </div>
      </div>
    </div>
  );
}
