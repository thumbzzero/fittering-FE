import LinkButton from '@/components/LinkButton';

type Props = {
  sectionName: string;
};

export default function ProductNotFound({ sectionName }: Props) {
  return (
    <>
      <div className="z-[-1] bg-custom-gray-50 h-60 w-[100vw] absolute left-0 md:mt-8"></div>
      <div className="mt-8 h-60">
        <div className="text-sm sm:text-lg font-semibold border-b border-custom-gray-400 pt-8 pb-2">
          {sectionName}
        </div>
        <div className="text-center my-8">
          <span className="block text-custom-gray-800 my-4 text-sm">
            아직 내 맞춤 정보를 설정하지 않으셨나요?
          </span>
          <LinkButton
            href="/user/mysize/edit"
            guide="내 맞춤 정보 설정하러 가기"
          />
        </div>
      </div>
    </>
  );
}
