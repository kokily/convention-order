'use client';

import type { ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { orderState } from '@/helper/states';

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

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onMenu();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold">컨벤션 커퓌 주문</h1>

      <div className="flex flex-col w-full">
        <div className="flex mt-8 mx-8 items-center mb-8">
          <label
            htmlFor="username"
            className="text-gray-400 text-2xl font-bold"
          >
            성 명
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus
            className="flex-1 border border-gray-300 py-2 bg-slate-200 rounded-lg ml-4 text-gray-700 text-center shadow-sm focus:outline-none focus:ring-2"
          />
        </div>
        <div className="mx-8">
          {username === '' ? (
            <button className="w-full cursor-not-allowed relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md text-xl">
                메뉴 선택
              </span>
            </button>
          ) : (
            <button
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              onClick={onMenu}
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
                메뉴 선택
              </span>
            </button>
          )}
        </div>
        <div className="text-center m-8 text-gray-500">
          <button onClick={onAdmin}>관리자 확인</button>
        </div>
      </div>
    </div>
  );
}
