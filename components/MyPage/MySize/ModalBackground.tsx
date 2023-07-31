'use client';

type Props = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalBackground({ setIsModalOpen }: Props) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsModalOpen(false);
  };
  return (
    <div
      onClick={handleBackgroundClick}
      className="w-screen h-screen fixed left-0 top-0 bg-[#6e6e6e] opacity-50 z-0"
    ></div>
  );
}
