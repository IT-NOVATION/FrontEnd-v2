import ProfileImg from '@/ui/user/ProfileImg';
import { useLayoutEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ImgUpload from '@/components/ImgUpload/ImgUpload';

type Props = {
  coverImg: string;
};

export default function CoverImgInput({ coverImg }: Props) {
  const [img, setImg] = useState<string>(coverImg);
  const { register } = useFormContext();
  register('bgImg');
  return (
    <div className="relative flex flex-col items-center gap-[2px]">
      <p className="text-body5">커버</p>
      <div
        className={`relative w-[70px] h-[70px] rounded-[9px] ${
          !coverImg && 'bg-theme-gray'
        }`}
      >
        {img && (
          <ProfileImg src={img} className=" w-[70px] h-[70px] rounded-[9px]" />
        )}
      </div>
      <ImgUpload setImg={setImg} type="cover" />
    </div>
  );
}
