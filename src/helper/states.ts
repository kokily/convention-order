import { atom } from 'jotai';

export const authState = atom({
  password: '',
});

export const orderState = atom<AddOrderType>({
  username: '',
  divide: '대용량',
  product: '',
});
