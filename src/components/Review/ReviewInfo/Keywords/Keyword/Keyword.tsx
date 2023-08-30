type Props = {
  keyword: {
    icon: JSX.Element;
    name: string;
  };
};

export default function Keyword({ keyword }: Props) {
  const { icon, name } = keyword;
  return (
    <div
      className="border h-[28px] rounded-[3px] px-[15px] py-[6px] flex gap-[6px] text-body5 
   border-theme-main text-theme-main"
    >
      {icon}
      <p>{name}</p>
    </div>
  );
}
