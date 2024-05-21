'use client';

import type { ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { toast } from 'react-toastify';
import { authState } from '@/helper/states';
import { Admin } from '@/components/admin/Admin';

export default function AdminLoginPage() {
  const { status } = useSession();
  const router = useRouter();

  // State
  const [state, dispatch] = useAtom(authState);
  const { password } = state;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ ...state, password: e.target.value });
  };

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      redirect: true,
      callbackUrl: '/list',
      password,
    });

    if (response?.error) {
      toast.error(response.error);
      return;
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onLogin(e);
    }
  };

  if (status === 'authenticated') {
    router.replace('/list');
  }

  return <Admin password={password} onChange={onChange} onLogin={onLogin} />;
}
