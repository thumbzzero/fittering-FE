'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function SocialLoginRedirect() {
  const params =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : null;
  const token = params?.get('token') ?? null;
  if (token !== null) localStorage.setItem('TOKEN', token);
  const accessToken =
    typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;
  useEffect(() => {
    if (typeof window !== 'undefined' && accessToken !== null) {
      redirect('/home');
    }
  }, [accessToken]);
  return null;
}
