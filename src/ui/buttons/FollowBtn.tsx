type Props = {
  onClick: () => void;
  className?: string;
};

export default function FollowBtn({ onClick, className }: Props) {
  return (
    <div className={className}>
      <button
        className={`w-[58px] h-[28px] rounded-[10px]  border shadow-[4px_4px_4px_0px_#00000016] text-[11px] font-[300]`}
        onClick={onClick}
      >
        + 팔로우
      </button>
    </div>
  );
}
