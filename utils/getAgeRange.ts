import { AGE_RANGE } from '@/constants/ageRange';

export const getAgeRange = (ageRangeId: number) => {
  if (ageRangeId === null || ageRangeId === undefined) return '- 세';
  return AGE_RANGE.filter((ageRange) => ageRange.id === ageRangeId)[0].name;
};
