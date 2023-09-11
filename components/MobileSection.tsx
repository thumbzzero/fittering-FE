import Image from 'next/image';
import back from 'public/icon/left_black.svg';

type Props = {
  sectionName: string;
};

export default function MobileSection({ sectionName }: Props) {
  return (
    <div className="relative py-6 text-center md:hidden">
      <Image className="absolute left-0 inline-block" src={back} alt="<" />
      <span className="inline-block text-xs xs:text-base sm:text-lg font-bold">
        {sectionName}
      </span>
    </div>
  );
}
