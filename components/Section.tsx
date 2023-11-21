type Props = {
  sectionName: string;
  children?: React.ReactNode;
};

export default function Section({ sectionName, children }: Props) {
  return (
    <>
      <h2 className="relative text-sm sm:text-lg font-semibold mt-8 mb-2">
        {sectionName}
        {children}
      </h2>
    </>
  );
}
