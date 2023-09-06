import ImgUpload from '@/components/ImgUpload/ImgUpload';
import ProfileImg from '@/ui/user/ProfileImg';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  profileImg: string;
};
export default function ProfileImgInput({ profileImg }: Props) {
  const [img, setImg] = useState<string>(profileImg);
  const { register,setValue } = useFormContext();
  register('profileImg');
  useEffect(() => {
    setValue('profileImg', img);
  }, [img]);
  return (
    <div className=" relative flex flex-col items-center gap-[2px]">
      <p className="text-body5">프로필</p>
      <div className="relative w-[70px] h-[70px] rounded-full">
        <ProfileImg src={img} className=" w-[70px] h-[70px] rounded-full" />
      </div>
      <ImgUpload  setImg={setImg} type='profile'/>
    </div>
  );
}
