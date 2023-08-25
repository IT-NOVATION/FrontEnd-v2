type Props = {
  selected: boolean;
};

export default function BannerIndicator({ selected }: Props) {
  return (
    <div
      className={`w-[16px] h-[16px] rounded-full cursor-pointer  ${
        selected ? 'bg-white' : 'bg-theme-gray'
      } `}
    />
  );
}
