import { Button } from './Button';

interface Props {
  username: string;
  onBack: () => void;
  filteredMenu: Array<MenuType>;
  onAddOrder: ({ product }: { product: string }) => void;
}

export function MenuDivide({
  username,
  onBack,
  filteredMenu,
  onAddOrder,
}: Props) {
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
          <Button
            key={item.id}
            product={item.product}
            onAddOrder={onAddOrder}
          />
        ))}
      </div>
    </div>
  );
}
