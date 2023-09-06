type Props = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};

export default function ButtonBox({ onClick, children, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-[30px] h-[30px] rounded-[8px] bg-[rgba(255, 255, 255, 0.60)] shadow-[inset_0px_4px_4px_0px_#0000003f]  flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
