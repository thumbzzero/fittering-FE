import BackButton from "@/components/BackButton";

type Props = {
  sectionName: string;
};

export default function MobileSection({ sectionName }: Props) {
  return (
    <div className="relative py-6 text-center md:hidden">
      <BackButton />
      <span className="inline-block text-xs xs:text-base sm:text-lg font-bold">
        {sectionName}
      </span>
    </div>
  );
}
