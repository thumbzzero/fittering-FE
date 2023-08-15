type Props = {
  sectionName: string;
};

export default function Section({ sectionName }: Props) {
  return (
    <div className="text-sm sm:text-lg font-semibold mt-8">{sectionName}</div>
  );
}
