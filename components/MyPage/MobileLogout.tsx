'use client';
import { logout } from '@/utils/logout';

export default function MobileLogout() {
  return (
    <span
      onClick={logout}
      className="absolute right-0 text-custom-gray-800 font-bold underline decoration-custom-gray-800 md:hidden"
    >
      로그아웃
    </span>
  );
}
