type Props = {
  sectionName: "최근 본 상품" | "좋아요한 상품";
};

export default function MyPageSection({ sectionName }: Props) {
  return (
    <div className="mx-4 md:mx-10 lg:mx-48 my-8 pb-2 border-b border-nav-black">
      <span className="font-bold">{sectionName}</span>
    </div>
  );
}
