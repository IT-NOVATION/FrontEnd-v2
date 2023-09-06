type Props = {
  value: string;
  resultCount: number;
};

export default function ResultCount({ value, resultCount }: Props) {
  return (
    <p className="w-full mt-[225px] flex justify-center text-[24px] font-[400] items-center">
      ‘<span className="text-theme-main">{value}</span>’에 대한 검색 결과는 총{' '}
      <span className="text-theme-main">{resultCount}</span>건 입니다.
    </p>
  );
}
