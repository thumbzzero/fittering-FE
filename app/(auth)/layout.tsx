import MainPageRedirect from '@/components/Redirect/MainPageRedirect';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MainPageRedirect />
      {children}
    </section>
  );
}
