import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      token: string;
    };
  }
}

declare global {
  interface SignOptions {
    expiresIn?: string | number;
  }

  interface AuthPayload {
    password: string;
  }

  type DivideType =
    | '대용량'
    | '커피'
    | '디카페인'
    | '음료'
    | '티'
    | '에이드&주스'
    | '빽스치노'
    | '블렌디드'
    | '디저트'
    | 'MD상품';

  interface MenuType {
    id: string;
    divide: DivideType;
    product: string;
  }

  interface CountType {
    product: string;
    count: number;
  }

  interface AddOrderType {
    username: string;
    divide: string;
    product: string;
  }

  interface OrderType {
    id: string;
    username: string;
    divide: DivideType;
    product: string;
  }

  interface ListOrderType {
    orders: Array<OrderType>;
    count: Array<CountType>;
  }
}
