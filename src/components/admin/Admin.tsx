'use client';

import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';

interface Props {
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onLogin: (e: SyntheticEvent) => void;
}

export function Admin({ password, onChange, onLogin }: Props) {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onLogin(e);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold">관리자 로그인</h1>

      <div className="flex flex-col w-full">
        <div className="flex mt-8 mx-8 items-center mb-8">
          <label
            htmlFor="username"
            className="text-gray-400 text-2xl font-bold"
          >
            비번
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onKeyDown={onKeyDown}
            autoFocus
            className="flex-1 border border-gray-300 py-2 bg-slate-200 rounded-lg ml-4 text-gray-700 text-center shadow-sm focus:outline-none focus:ring-2"
          />
        </div>
        <div className="mx-8">
          <button
            className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={onLogin}
          >
            <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              로그인
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
