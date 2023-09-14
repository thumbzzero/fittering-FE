type Props = {
  label: string;
};

export default function GraphLabel({ label }: Props) {
  return (
    <label className="w-10 text-center text-white bg-custom-gray-800 rounded px-2 py-1 font-semibold text-xs">
      {label}
    </label>
  );
}
