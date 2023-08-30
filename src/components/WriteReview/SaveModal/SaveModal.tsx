type Props = {
  onClose: () => void;
};

export default function SaveModal({  onClose }: Props) {
  return (
    <div
      className="w-[100vw] h-[100vh] fixed bg-theme-bgColor z-[100] flex items-center justify-center"
    >
      <div className="flex w-[420px] h-[168px] rounded-[20px] border-[0.7px] border-theme-gray shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25) bg-white pt-[33px] flex flex-col items-center">
        <p className="text-theme-lightBlack">리뷰가 저장되었습니다.</p>
        <p className="text-theme-lightBlack">완성된 리뷰를 확인해보세요!</p>
        <button
          onClick={onClose}
          className="w-[164px] h-[33px] mt-[25px] rounded-[4px] border bg-theme-main text-white text-body4"
        >
          저장
        </button>
      </div>
    </div>
  );
}
