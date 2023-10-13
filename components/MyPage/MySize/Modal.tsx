'use client';

import Link from 'next/link';
import Image from 'next/image';
import pencil from '/public/icon/pencil_white.svg';
import bulb from 'public/icon/light_bulb_white.svg';
import x from 'public/icon/x_black.svg';
import ModalBackground from './ModalBackground';
import { useState, useEffect } from 'react';
import { detectMobileDevice } from '../../../utils/detectMobileDevice';

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Modal({ setIsModalOpen }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(detectMobileDevice(window.navigator.userAgent));
  }, []);

  return (
    <>
      <ModalBackground setIsModalOpen={setIsModalOpen} />
      <div
        className={
          'fixed top-[11rem] left-0 right-0 mx-auto bg-white border w-[90vw] h-[63vw] xs:w-[80vw] xs:h-[52vw] md:w-[40vw] md:h-[28vw] text-center z-10 rounded-md ' +
          (isMobile
            ? 'landscape:top-[50%] landscape:translate-y-[-50%] landscape:w-[128vh] landscape:h-[90vh]'
            : '')
        }
      >
        <span
          className={
            'block my-[4.5vw] xs:my-[3.5vw] md:my-[2.5vw] font-semibold text-sm md:text-base ' +
            (isMobile ? 'landscape:xs:my-[4vw]' : '')
          }
        >
          입력 방식 선택하기
        </span>
        <Image
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 cursor-pointer"
          src={x}
          alt="모달창 닫기 버튼"
        />
        <div className="flex gap-2 xs:gap-4 items-center justify-center">
          <Link
            className={
              'flex flex-col items-center justify-center rounded-md w-[32vw] h-[32vw] md:w-[16vw] md:h-[16vw] text-white font-semibold text-xs xs:text-sm md:text-lg bg-main-color ' +
              (isMobile ? 'landscape:w-[56vh] landscape:h-[56vh]' : '')
            }
            href="/user/mysize/edit"
            aria-label="체형 정보 직접 입력으로 이동"
          >
            <Image
              className="mx-auto w-5/12 mb-3"
              src={pencil}
              alt=""
              aria-hidden={true}
            />
            직접 입력하기
          </Link>
          <Link
            className={
              'flex flex-col items-center justify-center rounded-md w-[32vw] h-[32vw] md:w-[16vw] md:h-[16vw] text-white font-semibold text-xs xs:text-sm md:text-lg bg-bean-color ' +
              (isMobile ? 'landscape:w-[56vh] landscape:h-[56vh]' : '')
            }
            href="/user/mysize/smart_analysis"
            aria-label="스마트 분석으로 이동"
          >
            <Image
              className="mx-auto w-5/12 mb-3"
              src={bulb}
              alt=""
              aria-hidden={true}
            />
            스마트 분석
          </Link>
        </div>
      </div>
    </>
  );
}
