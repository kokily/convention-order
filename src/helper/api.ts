import axios from 'axios';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://convention-order.kr/api'
      : 'http://localhost:3000/api',
  withCredentials: true,
});

export async function addOrderAPI(payload: AddOrderType) {
  const response = await client.post<OrderType>('/orders/add', payload);
  return response.data;
}

export async function removeOrderAPI() {
  const response = await client.delete('/orders/remove');
  return response.data;
}

export async function listOrdersAPI() {
  const response = await client.get<ListOrderType>('/orders');
  return response.data;
}
