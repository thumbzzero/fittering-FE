type Props = {
  bodyType:
    | 'height'
    | 'weight'
    | 'arm'
    | 'leg'
    | 'shoulder'
    | 'waist'
    | 'chest'
    | 'thigh'
    | 'hip';
  size: number | null;
};

const bodyTypeEn2Ko = {
  height: '키',
  weight: '몸무게',
  arm: '팔 길이',
  leg: '다리 길이',
  shoulder: '어깨 너비',
  waist: '허리 둘레',
  chest: '가슴 둘레',
  thigh: '허벅지 둘레',
  hip: '엉덩이 둘레',
};

export default function EditFormInput({ bodyType, size }: Props) {
  return (
    <div className="w-full relative h-8 md:h-16">
      <label>
        {bodyType === 'height' || bodyType === 'weight' ? (
          <span className="text-main-color absolute left-[-0.75rem]">* </span>
        ) : null}
        {bodyTypeEn2Ko[bodyType]}
      </label>
      <input
        className="absolute right-8 w-[25%] md:w-[30%] lg:w-[40%] landscape:w-[35%] lg:landscape:w-[40%]  border bg-transparent text-right px-2"
        type="number"
        inputMode="numeric"
        placeholder={size !== null ? size.toString() : ''}
        min={0}
        max={300}
      />
      <span className="absolute right-0">
        {bodyType === 'weight' ? 'kg' : 'cm'}
      </span>
    </div>
  );
}
