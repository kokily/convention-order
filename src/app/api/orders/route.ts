import { NextRequest, NextResponse } from 'next/server';
import db from '@/helper/database';

export async function GET(_: NextRequest) {
  try {
    const orders = await db.order.findMany();

    if (orders.length > 0) {
      const productCounts = {};

      orders.map((order) => {
        const product = order.product;
        productCounts[product] = (productCounts[product] || 0) + 1;
      });

      const count: CountType[] = [];

      for (let product in productCounts) {
        count.push({
          product,
          count: productCounts[product],
        });
      }

      return NextResponse.json({ orders, count });
    } else {
      return NextResponse.json({ orders: [], count: [] });
    }
  } catch (err: any) {
    throw new Error(err);
  }
}
