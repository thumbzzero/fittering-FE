type MainMenuType = {
  name: string;
  path: string;
};

export type SubMenuType = {
  name: string;
  path: string;
  id: number;
};

export const mainMenu: MainMenuType[] = [
  {
    name: '홈',
    path: '/',
  },
  {
    name: '카테고리',
    path: '/categories',
  },
  {
    name: '좋아요',
    path: '/favorite_goods',
  },
  {
    name: '마이페이지',
    path: '/user',
  },
];
