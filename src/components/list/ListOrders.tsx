'use client';

import type { SyntheticEvent } from 'react';
import { PublicOrders } from './PublicOrders';
import { CountOrders } from './CountOrders';

interface Props {
  data: ListOrderType;
  onFirst: () => void;
  onRemove: (e: SyntheticEvent) => void;
  onRefresh: () => void;
}

export function ListOrders({ data, onFirst, onRemove, onRefresh }: Props) {
  return (
    <div className="flex justify-center items-center flex-col mt-4">
      <h1 className="text-4xl font-bold">주문 리스트</h1>
      <button
        className="mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={onFirst}
      >
        초기화면
      </button>
      <button
        className="mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={onRefresh}
      >
        새로고침
      </button>

      <div className="flex flex-col w-full mx-2 my-4 p-8 items-center rounded-lg">
        <table className="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 bg-gray-50 dark:bg-gray-800">
                성명
              </th>
              <th scope="col" className="px-2 py-3">
                종류
              </th>
              <th scope="col" className="px-2 py-3 bg-gray-50 dark:bg-gray-800">
                제품
              </th>
            </tr>
          </thead>

          <PublicOrders orders={data.orders} />
        </table>
      </div>

      <div className="flex flex-col w-full mx-2 my-4 p-8 items-center rounded-lg">
        <table className="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 bg-gray-50 dark:bg-gray-800">
                순번
              </th>
              <th scope="col" className="px-2 py-3">
                제품
              </th>
              <th scope="col" className="px-2 py-3">
                수량
              </th>
            </tr>
          </thead>
          
          <CountOrders count={data.count} />
        </table>
      </div>

      <div className="flex flex-col w-full m-4 p-8 items-center">
        <button
          className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={onRemove}
        >
          <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
            내역 삭제
          </span>
        </button>
      </div>
    </div>
  );
}
