'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { addOrderAPI } from '@/helper/api';
import { menu } from '@/helper/menu';
import { orderState } from '@/helper/states';
import { MenuDivide } from '@/components/menu/divide/MenuDivide';

export default function DividePage() {
  const router = useRouter();

  // States
  const [state, dispatch] = useAtom(orderState);
  const { username, divide } = state;

  const filteredMenu = menu.filter((data) => data.divide === divide);

  // Mutations
  const addOrderMutate = useMutation({ mutationFn: addOrderAPI });

  const onBack = () => {
    dispatch({ ...state, divide: '대용량' });
    router.back();
  };

  const onAddOrder = async ({ product }: { product: string }) => {
    if (window.confirm(`${username}님 ${product}를 주문하겠습니다.`)) {
      await addOrderMutate.mutateAsync(
        {
          username,
          divide,
          product,
        },
        {
          onSuccess: () => {
            dispatch({
              username: '',
              divide: '대용량',
              product: '',
            });
            alert('주문이 완료되었습니다.');
          },
          onError: (err: any) => {
            alert(err.error);
          },
        },
      );
    } else {
      return;
    }
  };

  useEffect(() => {
    if (username === '') {
      router.replace('/');
    }

    if (!divide) {
      router.push('/menu');
    }
  }, [username, divide, router]);

  return (
    <MenuDivide
      username={username}
      onBack={onBack}
      filteredMenu={filteredMenu}
      onAddOrder={onAddOrder}
    />
  );
}
