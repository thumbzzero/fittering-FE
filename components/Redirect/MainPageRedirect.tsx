'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function MainPageRedirect() {
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;
  useEffect(() => {
    if (accessToken !== null) redirect('/home');
  }, [accessToken]);

  return null;
}
