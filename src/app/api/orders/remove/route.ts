import { NextRequest, NextResponse } from 'next/server';
import db from '@/helper/database';

export async function DELETE(_: NextRequest) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        id: 'desc',
      },
    });

    if (orders.length === 0) {
      return NextResponse.json(
        { error: '저장된 주문이 없습니다.' },
        { status: 404 },
      );
    } else {
      let count = 0;

      orders.map(async (order) => {
        count += 1;
        await db.order.delete({ where: { id: order.id } });
      });

      return NextResponse.json({ message: `총 ${count}개 삭제` });
    }
  } catch (err: any) {
    throw new Error(err);
  }
}
