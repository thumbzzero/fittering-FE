'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function LandingPageRedirect() {
  const accessToken =
      typeof window !== 'undefined' ? localStorage.getItem('TOKEN') : null;
  useEffect(() => {
    if (typeof window !== 'undefined' && accessToken === null) {
      redirect('/');
    }
  }, [accessToken]);
  return null;
}
