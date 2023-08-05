export type Category = {
  index: number;
  name: string;
  url: string;
  sub:
    | {
        index: number;
        name: string;
        url: string;
      }[];
};

export const outer: Category = {
  index: 0,
  name: '아우터',
  url: '/categories/outer',
  sub: [
    {
      index: 0,
      name: '후드 집업',
      url: '/categories/outer/hood',
    },
    {
      index: 1,
      name: '코트',
      url: '/categories/outer/coat',
    },
    {
      index: 2,
      name: '가디건',
      url: '/categories/outer/cardigan',
    },
    {
      index: 3,
      name: '패딩',
      url: '/categories/outer/padded_jacket',
    },
    {
      index: 4,
      name: '자켓',
      url: '/categories/outer/jacket',
    },
    {
      index: 5,
      name: '기타',
      url: '/categories/outer/others',
    },
  ],
};

export const top: Category = {
  index: 1,
  name: '상의',
  url: '/categories/top',
  sub: [
    {
      index: 6,
      name: '셔츠/블라우스',
      url: '/categories/top/shirt',
    },
    {
      index: 7,
      name: '니트',
      url: '/categories/top/knit',
    },
    {
      index: 8,
      name: '티셔츠',
      url: '/categories/top/t-shirt',
    },
    {
      index: 9,
      name: '맨투맨/후드티',
      url: '/categories/top/sweatshirt-hood',
    },
  ],
};

export const dress: Category = {
  index: 2,
  name: '원피스',
  url: '/categories/dress',
  sub: [],
};

export const bottom: Category = {
  index: 3,
  name: '하의',
  url: '/categories/bottom',
  sub: [
    {
      index: 10,
      name: '바지',
      url: '/categories/bottom/pants',
    },
    {
      index: 11,
      name: '치마',
      url: '/categories/bottom/skirt',
    },
  ],
};
