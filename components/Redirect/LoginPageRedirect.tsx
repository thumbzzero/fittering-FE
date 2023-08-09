'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPageRedirect() {
  const accessToken =
      typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;
  useEffect(() => {
    if (typeof window !== 'undefined' && accessToken === null) {
      redirect('/login');
    }
  }, [accessToken]);
  return null;
}
