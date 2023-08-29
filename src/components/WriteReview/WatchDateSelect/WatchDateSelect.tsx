import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

function convertDateToString(date: number[]) {
  const year = String(date[0]).padStart(2, '0');
  const month = String(date[1]).padStart(2, '0');
  const day = String(date[2]).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function WatchDateSelect() {
  const { register, setValue } = useFormContext();
  register('hasCheckDate');
  register('watchDate');
  const [checked, setChecked] = useState(false);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setYear(0);
    setMonth(0);
    setDay(0);
  };
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setYear(Number(e.currentTarget.value));
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setMonth(Number(e.currentTarget.value));
  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setDay(Number(e.currentTarget.value));

  useEffect(() => {
    setValue('hasCheckDate', checked);
  }, [checked]);
  useEffect(() => {
    setValue('watchDate', convertDateToString([year, month, day]));
  }, [year, month, day]);

  return (
    <div className="flex items-center gap-[4px]">
      <input
        id="watchDate"
        type="checkbox"
        checked={checked}
        onChange={toggleChecked}
      />
      <label htmlFor="watchDate" className="text-body4 mr-[3px]">
        관람 일자 선택
      </label>
      <select
        key={checked + 'year'}
        disabled={!checked}
        onChange={handleYearChange}
        className="border-[0.7px] border-theme-gray rounded-4px"
      >
        <option value={year}>YYYY</option>
        {Array(30)
          .fill(0)
          .map((i, idx) => (
            <option key={idx + 1994} value={idx + 1994}>
              {idx + 1994}
            </option>
          ))}
      </select>
      <select
        key={checked + 'month'}
        disabled={!year}
        onChange={handleMonthChange}
        className="border-[0.7px] border-theme-gray rounded-4px"
      >
        <option value={month}>MM</option>
        {Array(12)
          .fill(0)
          .map((i, idx) => (
            <option key={idx + 1} value={idx + 1}>
              {idx + 1}
            </option>
          ))}
      </select>
      <select
        key={checked + 'day'}
        disabled={!month}
        onChange={handleDayChange}
        className="border-[0.7px] border-theme-gray rounded-4px"
      >
        <option value={day}>DD</option>
        {Array(
          month === 1 ||
            month === 3 ||
            month === 5 ||
            month === 7 ||
            month === 8 ||
            month === 10 ||
            month === 12
            ? 31
            : month === 2
            ? 28
            : 30
        )
          .fill(0)
          .map((i, idx) => (
            <option key={idx + 1} value={idx + 1}>
              {idx + 1}
            </option>
          ))}
      </select>
    </div>
  );
}
