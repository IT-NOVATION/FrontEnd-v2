import useImgUpload from '@/hooks/useImgUpload';
import SmallCameraIcon from '@/ui/icons/SmallCameraIcon';

type Props = {
  setImg: React.Dispatch<React.SetStateAction<string>>;
  type: 'profile' | 'cover';
};

export default function ImgEditBtn({ type, setImg }: Props) {
  const uploadImg = useImgUpload(setImg);
  return (
    <>
      <input
        id={type}
        type="file"
        accept="image/*"
        onChange={uploadImg}
        className="hidden"
      />
      <label
        htmlFor={type}
        className="cursor-pointer absolute right-[-5px] bottom-[-5px] w-[23px] h-[23px] rounded-full bg-white border border-theme-gray flex justify-center items-center"
      >
        <SmallCameraIcon />
      </label>
    </>
  );
}
