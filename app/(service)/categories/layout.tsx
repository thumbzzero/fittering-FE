import MainCategoryNavbar from '@/components/Navbar/MainCategoryNavbar';
import SubCategoryNavbar from '@/components/Navbar/SubCategoryNavbar';

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainCategoryNavbar />
      <SubCategoryNavbar />
      {children}
    </>
  );
}
