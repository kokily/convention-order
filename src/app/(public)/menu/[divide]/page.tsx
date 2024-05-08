'use client';

import { addOrderAPI } from '@/helper/api';
import { menu } from '@/helper/menu';
import { orderState } from '@/helper/states';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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

  const Button = ({ product }: { product: string }) => (
    <button
      className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={() => onAddOrder({ product })}
    >
      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
        {product}
      </span>
    </button>
  );

  useEffect(() => {
    if (username === '') {
      router.replace('/');
    }

    if (!divide) {
      router.push('/menu');
    }
  }, [username, divide, router]);

  return (
    <div className="flex justify-center items-center flex-col my-8">
      <h1 className="text-4xl font-bold">{username}님 주문 중</h1>
      <button
        className="mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={onBack}
      >
        뒤 로
      </button>

      <div className="flex flex-col w-full m-4 p-8 items-center">
        {filteredMenu.map((item) => (
          <Button key={item.id} product={item.product} />
        ))}
      </div>
    </div>
  );
}
