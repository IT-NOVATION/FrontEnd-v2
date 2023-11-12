type Props = {
  onClick?: () => void;
};

export default function FollowingBtn({ onClick }: Props) {
  return (
    <button
      className="w-[58px] h-[28px] border rounded-[10px] bg-[#b3b3b333] shadow-[4px_4px_4px_0px_#00000016] text-[11px] font-[300]"
      onClick={onClick}
    >
      팔로잉
    </button>
  );
}
