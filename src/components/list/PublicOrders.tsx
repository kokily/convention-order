'use client';

interface Props {
  orders: Array<OrderType>;
}

export function PublicOrders({ orders }: Props) {
  return (
    <tbody>
      {orders.length > 0 ? (
        orders.map((order: OrderType) => (
          <tr
            key={order.id}
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <td
              scope="row"
              className="px-1 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
            >
              {order.username}
            </td>
            <td scope="row" className="px-1 py-4">
              {order.divide}
            </td>
            <td scope="row" className="px-1 py-4 bg-gray-50 dark:bg-gray-800">
              {order.product}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            scope="row"
            className="py-4 bg-gray-50 dark:bg-gray-800"
            colSpan={4}
          >
            데이터가 없습니다.
          </td>
        </tr>
      )}
    </tbody>
  );
}
