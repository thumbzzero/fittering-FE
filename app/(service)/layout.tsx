import Header from '@/components/Header';
import MobileNavbar from '@/components/Navbar/MobileNavbar';

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-full px-4 lg:px-0 max-w-screen-lg mx-auto mb-[6rem] md:mb-0">
      <Header />
      <section className="grow">{children}</section>
      <MobileNavbar />
    </main>
  );
}
