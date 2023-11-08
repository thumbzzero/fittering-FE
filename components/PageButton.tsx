type Props = {
  page: number | '<' | '>';
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function PageButton({ page, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border h-6 w-6 xs:h-8 xs:w-8 mx-[3px] ${
        isActive
          ? 'font-semibold bg-bean-color border-bean-color text-white'
          : ''
      }`}
      type="button"
      aria-pressed={isActive}
      aria-label={`${page} 페이지로 이동`}
    >
      {page}
    </button>
  );
}
