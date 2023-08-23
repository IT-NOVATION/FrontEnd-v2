import Image from 'next/image';
import defaultProfile from '../../../public/images/defaultProfile.png';

type Props = {
  src: string | null;
  className?: string;
  size: number;
};

export default function ProfileImg({ className, src, size }: Props) {
  return (
    <Image
      src={src || defaultProfile}
      className={`rounded-full object-cover aspect-square ${className}`}
      width={size}
      height={size}
      alt="프로필 이미지"
    />
  );
}
