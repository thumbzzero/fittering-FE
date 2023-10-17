import MallDescription from '../MallCommon/MallDescription';
import MallName from '../MallCommon/MallName';
import MallLogo from './MallLogo';

type Props = {
  src: string;
  name: string;
  description: string;
};

export default function MobileMallIntroduction({
  src,
  name,
  description,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <MallLogo src={src} name={name} />
        <MallName name={name} />
      </div>
      <MallDescription description={description} isMallPage={true} />
    </div>
  );
}
