import { MallPreview } from '@/service/malls';
import Image from 'next/image';
import Link from 'next/link';

type Props = { mall: MallPreview };

export default function MallPreview({ mall: { mallId, name, image } }: Props) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 md:w-44 md:h-36 mx-auto">
        <Link href={`/malls/${mallId}`}>
          <Image
            className="w-full h-full p-2 md:p-4 rounded-lg object-contain mx-auto mb-2 border border-custom-gray-100"
            src={`/${image}`}
            alt=""
            width={200}
            height={200}
          />
        </Link>
      </div>
      <Link className="font-semibold text-sm" href={`/malls/${mallId}`}>
        {name}
      </Link>
    </div>
  );
}
