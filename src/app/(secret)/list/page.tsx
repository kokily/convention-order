'use client';

import type { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ListOrders } from '@/components/list/ListOrders';
import { listOrdersAPI, removeOrderAPI } from '@/helper/api';

export default function AdminListPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  // Query
  const { data, refetch } = useQuery({
    queryKey: ['order'],
    queryFn: () => listOrdersAPI(),
    staleTime: 0,
    gcTime: 0,
  });

  // Mutations
  const removeOrderMutate = useMutation({ mutationFn: removeOrderAPI });

  const onFirst = () => {
    router.replace('/');
  };

  const onRemove = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (window.confirm('내역이 삭제됩니다.')) {
      await removeOrderMutate.mutateAsync(undefined, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['order'] });
          const timer = setTimeout(() => {
            console.log('Initial Time');
          }, 500);
          clearTimeout(timer);
          refetch();
        },
        onError: (err: any) => {
          toast.error(err.error);
        },
      });
    } else {
      return;
    }
  };

  const onRefresh = () => {
    refetch();
  };

  return data ? (
    <ListOrders
      data={data}
      onFirst={onFirst}
      onRemove={onRemove}
      onRefresh={onRefresh}
    />
  ) : (
    <div>Loading</div>
  );
}
