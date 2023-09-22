type Props = {
  description: string;
  isMallPage?: boolean;
};

export default function MallDescription({ description, isMallPage }: Props) {
  return (
    <p
      className={`text-gray-500 text-xs break-words ${
        isMallPage ? '' : 'truncate'
      }`}
    >
      {description}
    </p>
  );
}
