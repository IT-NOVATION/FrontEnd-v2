type Props = {
  onClick?: () => void;
};

export default function FollowBtn({ onClick }: Props) {
  return (
    <button
      className={`w-[58px] h-[28px] rounded-[10px] border shadow-[4px_4px_4px_0px_#00000015] text-[11px] font-[300] bg-white`}
      onClick={onClick}
    >
      + 팔로우
    </button>
  );
}
