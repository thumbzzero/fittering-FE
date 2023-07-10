'use client';
export const LoginForm = () => {
  return (
    <form className="mt-12">
      <input
        className="block border w-full p-2 rounded-lg"
        type="text"
        placeholder="이메일"
        maxLength={64}
        required
      />
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="password"
        placeholder="비밀번호"
        minLength={8}
        maxLength={15}
        required
      />
      <button
        className="bg-[#87AB4E] w-full text-white p-2 rounded-lg font-bold my-4 disabled:opacity-75"
        disabled
      >
        로그인
      </button>
    </form>
  );
};
