import { BottomSize, DressSize, TopSize } from '@/types/sizes';

export const getSizeData = (
  category: string,
  sizes: TopSize[] | BottomSize[] | DressSize[]
) => {
  if (sizes === undefined) return [];
  if (category === 'top' || category === 'outer') {
    const sizeData = sizes?.map((size: TopSize) => {
      const { name, full, shoulder, chest, sleeve } = size;
      return [
        { label: '사이즈', data: name },
        { label: '총장', data: full },
        { label: '어깨 너비', data: shoulder },
        { label: '가슴 단면', data: chest },
        { label: '소매 길이', data: sleeve },
      ];
    });
    return sizeData;
  }
  if (category === 'dress') {
    const sizeData = sizes?.map((size: DressSize) => {
      const {
        name,
        full,
        shoulder,
        chest,
        waist,
        armHall,
        hip,
        sleeve,
        sleeveWidth,
        bottomWidth,
      } = size;
      return [
        { label: '사이즈', data: name },
        { label: '총장', data: full },
        { label: '어깨 너비', data: shoulder },
        { label: '가슴 단면', data: chest },
        { label: '허리 단면', data: waist },
        { label: '암홀', data: armHall },
        { label: '엉덩이 단면', data: hip },
        { label: '소매 길이', data: sleeve },
        { label: '소매 단면', data: sleeveWidth },
        { label: '밑단', data: bottomWidth },
      ];
    });
    return sizeData;
  }
  const sizeData = sizes?.map((size: BottomSize) => {
    const { name, full, waist, hipWidth, thigh, rise, bottomWidth } = size;
    return [
      { label: '사이즈', data: name },
      { label: '총장', data: full },
      { label: '허리 단면', data: waist },
      { label: '엉덩이 단면', data: hipWidth },
      { label: '허벅지 단면', data: thigh },
      { label: '밑위', data: rise },
      { label: '밑단', data: bottomWidth },
    ];
  });
  return sizeData;
};
