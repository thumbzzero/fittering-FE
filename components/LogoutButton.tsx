'use client';

import { logout } from '@/utils/logout';

export default function LogoutButton() {
  return (
    <button
      onClick={logout}
      className="absolute top-[50%] translate-y-[-50%] right-0 bg-main-color text-white rounded w-20 h-8 text-xs"
      type="button"
    >
      로그아웃
    </button>
  );
}
