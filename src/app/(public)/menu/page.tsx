'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { orderState } from '@/helper/states';
import { Menu } from '@/components/menu/list/Menu';

export default function MenuPage() {
  const router = useRouter();

  // States
  const [state, dispatch] = useAtom(orderState);
  const { username } = state;

  const onBack = () => {
    router.back();
  };

  const onDivide = (divide: DivideType) => {
    dispatch({ ...state, divide });
    router.push(`/menu/${divide}`);
  };

  useEffect(() => {
    if (username === '') {
      router.replace('/');
    }
  }, [username, router]);

  return <Menu username={username} onBack={onBack} onDivide={onDivide} />;
}
