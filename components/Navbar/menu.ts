type Menu = {
  name: string;
  path: string;
};

export const categoryMenu: Menu[] = [
  {
    name: 'All',
    path: '/categories',
  },
  {
    name: '상의',
    path: '/categories/top',
  },
  {
    name: '하의',
    path: '/categories/bottom',
  },
];
