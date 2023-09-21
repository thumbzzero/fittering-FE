import { getMallsList } from '@/service/malls';

export const mallNameToMallId = async (mallName: string) => {
  const mallsList = await getMallsList();
  return mallsList?.filter((mall) => mall.name === mallName)[0]?.id;
};
