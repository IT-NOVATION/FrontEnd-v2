type Props = {
  onClose: () => void;
};

export default function CancelModal({ onClose }: Props) {
  return (
    <div className="w-[100vw] h-[100vh] fixed bg-theme-bgColor z-[100] flex items-center justify-center">
      <div className="flex w-[420px] h-[168px] rounded-[20px] border-[0.7px] border-theme-gray shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25) bg-white pt-[33px] flex flex-col items-center">
        <p className="text-theme-lightBlack">작성중인 내용이 삭제됩니다.</p>
        <p className="text-theme-lightBlack">리뷰 작성을 그만하시겠습니까?</p>
        <div className="flex gap-[27px] mt-[30px]">
          <button
            onClick={onClose}
            className="w-[164px] h-[33px] rounded-[4px] border border-theme-lightGray text-theme-darkGray text-body4"
          >
            취소
          </button>
          <button className="w-[164px] h-[33px] rounded-[4px] border bg-theme-main text-white text-body4">
            계속 리뷰 쓰기
          </button>
        </div>
      </div>
    </div>
  );
}
