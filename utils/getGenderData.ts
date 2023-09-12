export const getGenderData = (gender: string) => {
  if (gender === 'M') return '남성';
  if (gender === 'F') return '여성';
  return '전체';
};
