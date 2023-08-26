const Keywords = [
  '엘리멘탈',
  '범죄도시3',
  '인어공주',
  '리바운드',
  '스즈메의 문단속',
  '더 퍼스트 슬램덩크',
];
export default function PopularSearchTerms() {
  return (
    <div className="mt-[70px]  w-[900px] flex">
      <div className="ml-[10px] w-[120px] h-[39px] bg-theme-gray rounded-[20px] flex justify-center items-center">
        인기 검색어
      </div>
      <ul className="flex flex-wrap gap-x-[43px] gap-y-[15px] items-center px-[35px] w-[600px]">
        {Keywords.map((keyword, idx) => (
          <li className="text-body2 text-theme-darkGray" key={idx}>
            # {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}
