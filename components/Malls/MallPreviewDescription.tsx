type Props = {
  description: string;
};

export default function MallPreviewDescription({ description }: Props) {
  return (
    <p className="text-gray-500 text-xs break-words truncate">{description}</p>
  );
}
