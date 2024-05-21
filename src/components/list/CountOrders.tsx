'use client';

interface Props {
  count: Array<CountType>;
}

export function CountOrders({ count }: Props) {
  return (
    <tbody>
      {count.length > 0 ? (
        count.map((item, i) => (
          <tr
            key={item.product}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <td
              scope="row"
              className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              {i + 1}번
            </td>
            <td scope="row" className="px-1 py-4">
              {item.product}
            </td>
            <td scope="row" className="px-1 py-4 bg-gray-50 dark:bg-gray-800">
              {item.count}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            scope="row"
            className="py-4 bg-gray-50 dark:bg-gray-800"
            colSpan={3}
          >
            데이터가 없습니다.
          </td>
        </tr>
      )}
    </tbody>
  );
}
