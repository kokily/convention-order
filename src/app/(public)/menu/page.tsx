'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { orderState } from '@/helper/states';

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

  const Button = ({ target }: { target: DivideType }) => (
    <button
      className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      onClick={() => onDivide(target)}
    >
      <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
        {target}
      </span>
    </button>
  );

  useEffect(() => {
    if (username === '') {
      router.replace('/');
    }
  }, [username, router]);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold">{username}님 주문 중</h1>
      <button
        className="mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={onBack}
      >
        뒤 로
      </button>

      <div className="flex flex-col w-full m-4 p-8 items-center">
        <Button target="대용량" />
        <Button target="커피" />
        <Button target="디카페인" />
        <Button target="음료" />
        <Button target="티" />
        <Button target="에이드&주스" />
        <Button target="빽스치노" />
        <Button target="블렌디드" />
        <Button target="디저트" />
        <Button target="MD상품" />
      </div>
    </div>
  );
}
