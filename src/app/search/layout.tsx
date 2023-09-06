type Props = {
  children: React.ReactNode;
};

export default function SearchResultLayout({ children }: Props) {
  return (
    <div className="pt-[70px]">
      <div className="w-[900px] mx-auto">{children}</div>
    </div>
  );
}
