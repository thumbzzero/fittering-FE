'use client';

import { useState } from 'react';
import Link from 'next/link';

const divStyle = 'w-full my-4';
const infoTypeLabelStyle = 'block text-lg my-2';
const inputStyle = 'w-full md:w-1/2 border rounded-lg p-2';
const birthDateInputStyle =
  'w-2/3 lg:w-4/5 lg: border rounded-lg p-2 text-center md:text-right';

export const UserEditForm = () => {
  const [username, setUsername] = useState('열졍콩');
  const [gender, setGender] = useState('F');
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(7);
  const [day, setDay] = useState(14);
  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleIsEditMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isEditMode) {
      // 저장 코드
    }
    setIsEditMode(!isEditMode);
  };

  return (
    <form className="w-11/12 md:w-3/4 mx-auto md:ml-0">
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="username">
          닉네임
        </label>
        <input
          className={inputStyle}
          type="text"
          id="username"
          placeholder={username}
          minLength={1}
          maxLength={20}
          onChange={handleUsernameChange}
          disabled={!isEditMode}
        />
      </div>
      <div className={divStyle}>
        <label className={infoTypeLabelStyle}>성별</label>
        <ul className="w-full md:w-1/2 box-border list-none block">
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
                  ? 'text-[#87AB4E] font-bold border-[1.5px] border-[#87AB4E]'
                  : gender === 'F'
                  ? 'text-[#9ca3af] border border-r-0'
                  : 'text-[#9ca3af] border') +
                ' block relative box-border w-full p-2 rounded-l-lg text-center'
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
                  ? 'text-[#87AB4E] font-bold border-[1.5px] border-[#87AB4E]'
                  : 'text-[#9ca3af] border border-l-0') +
                ' block relative box-border w-full p-2 rounded-r-lg text-center'
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
        <div className="flex">
          <div className="w-full md:w-1/2">
            <div className="inline-block w-[40%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="year"
                placeholder={isNaN(year) ? '' : year.toString()}
                onChange={handleYearChange}
                minLength={4}
                maxLength={4}
                disabled={!isEditMode}
              />
              <label className="inline-block w-1/5 p-2" htmlFor="year">
                년
              </label>
            </div>
            <div className="inline-block w-[30%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="month"
                placeholder={isNaN(month) ? '' : month.toString()}
                onChange={handleMonthChange}
                minLength={2}
                maxLength={2}
                disabled={!isEditMode}
              />
              <label className="inline-block w-1/5 p-2" htmlFor="month">
                월
              </label>
            </div>
            <div className="inline-block w-[30%] md:w-1/3">
              <input
                className={birthDateInputStyle}
                type="text"
                id="day"
                placeholder={isNaN(day) ? '' : day.toString()}
                onChange={handleDayChange}
                minLength={2}
                maxLength={2}
                disabled={!isEditMode}
              />
              <label className="inline-block w-1/5 p-2" htmlFor="day">
                일
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-16 w-full md:w-1/2">
        <button
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-[#87AB4E] text-[white] font-bold border-none"
          onClick={handleIsEditMode}
        >
          {isEditMode ? '저장' : '수정'}
        </button>
        {isEditMode ? null : (
          <Link href="/user/edit/password">
            <button className="text-xs md:text-base absolute right-0 align-right rounded-3xl px-2 py-2 bg-[#efefef] border-none">
              비밀번호 수정
            </button>
          </Link>
        )}
      </div>
    </form>
  );
};
