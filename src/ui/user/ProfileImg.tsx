import Image from 'next/image';
import defaultProfile from '../../../public/images/defaultProfile.png';

type Props = {
  src: string | null;
  className?: string;
};

export default function ProfileImg({ className, src }: Props) {
  return (
    <Image
      src={src || defaultProfile}
      className={`rounded-full object-cover aspect-square ${className}`}
      fill
      alt="프로필 이미지"
    />
  );
}
