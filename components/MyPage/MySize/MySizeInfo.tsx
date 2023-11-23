'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchMySize } from '@/store/mySizeAction';
import { MySize } from '@/types/mysize';
import { MyPage } from '@/types/user';
import { useEffect } from 'react';

const tableStyle =
  'table-fixed w-full h-1/2 md:w-1/2 md:h-full md:border-spacing-y-8 md:align-top';
const trStyle = 'h-8 md:h-16';
const sizeStyle = 'text-main-color font-semibold text-lg pr-2';

export default function MySizeInfo() {
  const dispatch = useAppDispatch();
  const myPage: MyPage = useAppSelector((state) => state.myPage);
  const mySize: MySize = useAppSelector((state) => state.mySize);

  useEffect(() => {
    dispatch(fetchMySize());
  }, [dispatch]);

  return (
    <div className="flex-1 w-full h-full">
      <div className="font-semibold pb-6">{`${myPage.username}`}님의 체형</div>
      <div className="flex flex-col md:flex-row md:gap-12">
        <table className={tableStyle}>
          <tbody>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 키</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.height ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 몸무게</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.weight ?? '-'}</span>
                kg
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 팔 길이</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.arm ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 다리 길이</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.leg ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 어깨 너비</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.shoulder ?? '-'}</span>
                cm
              </td>
            </tr>
          </tbody>
        </table>
        <table className={tableStyle}>
          <tbody>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 가슴 둘레</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.chest ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 허리 둘레</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.waist ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 허벅지 둘레</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.thigh ?? '-'}</span>
                cm
              </td>
            </tr>
            <tr className={trStyle}>
              <td className="text-left align-top">‧ 엉덩이 둘레</td>
              <td className="text-right align-top">
                <span className={sizeStyle}>{mySize.hip ?? '-'}</span>
                cm
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
