'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { MyPage } from '@/types/user';
import { editMyPage } from '@/service/user';
import { myPageActions } from '@/store/myPageSlice';

const divStyle = 'my-4 inline-block w-full md:w-3/5';
const infoTypeLabelStyle = 'block my-2';
const inputStyle =
  'w-full border rounded-lg px-2 py-2.5 block mx-auto disabled:text-custom-gray-700';
const birthDateInputStyle =
  'w-2/3 lg:w-4/5 lg: border rounded-lg px-2 py-2.5 text-center md:text-right disabled:text-custom-gray-700';

export const UserEditForm = () => {
  const dispatch = useAppDispatch();
  const myPage: MyPage = useAppSelector((state) => state.myPage);

  const [username, setUsername] = useState(myPage.username ?? '-');
  const [gender, setGender] = useState(myPage.gender ?? '-');
  const [year, setYear] = useState(myPage.year ?? 0);
  const [month, setMonth] = useState(myPage.month ?? 0);
  const [day, setDay] = useState(myPage.day ?? 0);
  const [isEditMode, setIsEditMode] = useState(false);

  const genderTextColor = isEditMode
    ? 'text-main-color'
    : 'text-custom-gray-700';
  const selectedGenderBorderColor = isEditMode ? 'border-main-color' : 'border';
  const genderBackgroundColor = isEditMode ? 'bg-transparent' : 'bg-neutral-50';

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(parseInt(e.target.value));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(e.target.value));
  };

  const handleIsEditMode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
      window.alert('생년월일을 올바르게 입력해 주세요.');
      return;
    }
    const updatedMyPage: MyPage = {
      email: myPage.email,
      username,
      gender,
      year,
      month,
      day,
    };
    if (isEditMode) {
      const response = await editMyPage(updatedMyPage);
      if (response.ok) {
        window.alert('회원 정보가 수정되었습니다.');
        dispatch(myPageActions.setMyPage(updatedMyPage));
        setIsEditMode(!isEditMode);
      } else {
        window.alert('회원 정보 수정에 실패하였습니다.');
      }
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <form className="w-full flex flex-col items-center justify-center md:mt-6">
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="username">
          닉네임
        </label>
        <input
          className={inputStyle}
          type="text"
          id="username"
          value={username}
          placeholder={username}
          minLength={1}
          maxLength={20}
          onChange={handleUsernameChange}
          disabled={!isEditMode}
        />
      </div>

      <div className={divStyle}>
        <label className={infoTypeLabelStyle}>성별</label>
        <ul className="w-full box-border list-none block mx-auto">
          <li className="w-1/2 rounded-l-xl inline-block list-none">
            <input
              className="absolute w-full list-none appearance-none"
              type="radio"
              name="gender"
              id="M"
              value="M"
              onChange={handleGenderChange}
              disabled={!isEditMode}
            />
            <label
              className={
                (gender === 'M'
                  ? `${genderTextColor} font-bold border-[1.5px] ${selectedGenderBorderColor} ${genderBackgroundColor}`
                  : gender === 'F'
                  ? 'text-custom-gray-700 border border-r-0'
                  : 'text-custom-gray-700 border') +
                ' block relative box-border w-full px-2 py-2.5 rounded-l-lg text-center'
              }
              htmlFor="M"
            >
              남성
            </label>
          </li>
          <li className="w-1/2 inline-block list-none">
            <input
              className="absolute list-none appearance-none"
              type="radio"
              name="gender"
              id="F"
              value="F"
              onChange={handleGenderChange}
              disabled={!isEditMode}
            />
            <label
              className={
                (gender === 'F'
                  ? `${genderTextColor} font-bold border-[1.5px] ${selectedGenderBorderColor} ${genderBackgroundColor}`
                  : 'text-custom-gray-700 border border-l-0') +
                ' block relative box-border w-full px-2 py-2.5 rounded-r-lg text-center'
              }
              htmlFor="F"
            >
              여성
            </label>
          </li>
        </ul>
      </div>

      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="username">
          생년월일
        </label>
        <div className="flex w-full justify-center">
          <div className="w-full">
            <div className="inline-block w-[40%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="year"
                value={isNaN(year) ? '' : year.toString()}
                placeholder={isNaN(year) ? '' : year.toString()}
                onChange={handleYearChange}
                minLength={4}
                maxLength={4}
                disabled={!isEditMode}
                inputMode="numeric"
              />
              <label className="inline-block w-1/5 p-2 sm:p-3" htmlFor="year">
                년
              </label>
            </div>
            <div className="inline-block w-[30%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="month"
                value={isNaN(month) ? '' : month.toString()}
                placeholder={isNaN(month) ? '' : month.toString()}
                onChange={handleMonthChange}
                minLength={1}
                maxLength={2}
                disabled={!isEditMode}
                inputMode="numeric"
              />
              <label className="inline-block w-1/5 p-2 sm:p-3" htmlFor="month">
                월
              </label>
            </div>
            <div className="inline-block w-[30%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="day"
                value={isNaN(day) ? '' : day.toString()}
                placeholder={isNaN(day) ? '' : day.toString()}
                onChange={handleDayChange}
                minLength={1}
                maxLength={2}
                disabled={!isEditMode}
                inputMode="numeric"
              />
              <label className="inline-block w-1/5 p-2 sm:p-3" htmlFor="day">
                일
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 w-full md:w-3/5">
        <button
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-main-color text-[white] font-bold border-none"
          onClick={handleIsEditMode}
        >
          {isEditMode ? '저장' : '수정'}
        </button>
        {isEditMode ? null : (
          <Link href="/user/edit/password" aria-label="비밀번호 변경으로 이동">
            <button className="text-xs md:text-base absolute right-0 align-right rounded-3xl px-2 py-2 bg-custom-gray-100 border-none">
              비밀번호 변경
            </button>
          </Link>
        )}
      </div>
    </form>
  );
};
