'use client';

import type { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { orderState } from '@/helper/states';
import { Home } from '@/components/home/Home';

export default function AddOrderPage() {
  const router = useRouter();

  // States
  const [state, dispatch] = useAtom(orderState);
  const { username } = state;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ ...state, username: e.target.value });
  };

  const onMenu = () => {
    router.push('/menu');
  };

  const onAdmin = () => {
    router.push('/admin');
  };

  return (
    <Home
      username={username}
      onChange={onChange}
      onMenu={onMenu}
      onAdmin={onAdmin}
    />
  );
}
