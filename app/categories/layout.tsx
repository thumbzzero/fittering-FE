import MainCategoryNavbar from '@/components/Navbar/MainCategoryNavbar';

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainCategoryNavbar />
      {children}
    </>
  );
}
