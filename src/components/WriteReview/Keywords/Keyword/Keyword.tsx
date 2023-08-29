import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  icon: React.ReactElement;
  name: string;
  select: string;
};

export default function Keyword({ icon, name, select }: Props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => setSelected((prev) => !prev);
  const { register, setValue } = useFormContext();
  register(select);
  useEffect(() => {
    setValue(select, selected);
  }, [selected]);
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className={`border h-[28px] rounded-[3px] px-[15px] py-[6px] flex gap-[6px] text-body5 ${
          selected && 'border-theme-main text-theme-main'
        }`}
      >
        {icon}
        <p>{name}</p>
      </button>
    </>
  );
}
