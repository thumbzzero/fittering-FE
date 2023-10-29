import Link from 'next/link';

export default function MainIntroduction() {
  return (
    <div className="text-center py-10 md:py-20">
      <h1 className="text-2xl xs:text-4xl md:text-5xl font-bold my-8">
        나의{' '}
        <span className="text-3xl xs:text-5xl md:text-6xl text-main-color">
          Fit
        </span>
        에 맞는
        <br className="md:hidden" /> 의류{' '}
        <span className="text-3xl xs:text-5xl md:text-6xl text-bean-color">
          Filtering
        </span>{' '}
        솔루션
      </h1>
      <p className="text-sm sm:text-lg font-semibold text-custom-gray-700">
        핏터링(Fittering)을 통해 체형 분석을 쉽게 하고,
        <br className="md:hidden" /> 나의 체형에 fit한 옷을 구매해보세요!
      </p>
      <div className="mt-12 align-center align-middle">
        <Link
          className="text-sm xs:text-base font-semibold bg-main-color text-white rounded px-12 py-3 h-20 leading-20"
          href="https://fit-tering.com/signup"
          role="button"
        >
          시작하기
        </Link>
      </div>
    </div>
  );
}
