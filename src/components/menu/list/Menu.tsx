'use client';

import { Button } from './Button';

interface Props {
  username: string;
  onBack: () => void;
  onDivide: (divide: DivideType) => void;
}

export function Menu({ username, onBack, onDivide }: Props) {
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
        <Button divide="대용량" onDivide={onDivide} />
        <Button divide="커피" onDivide={onDivide} />
        <Button divide="디카페인" onDivide={onDivide} />
        <Button divide="음료" onDivide={onDivide} />
        <Button divide="티" onDivide={onDivide} />
        <Button divide="에이드&주스" onDivide={onDivide} />
        <Button divide="빽스치노" onDivide={onDivide} />
        <Button divide="블렌디드" onDivide={onDivide} />
        <Button divide="디저트" onDivide={onDivide} />
        <Button divide="MD상품" onDivide={onDivide} />
      </div>
    </div>
  );
}
