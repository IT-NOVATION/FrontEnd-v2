import { IMovielogUser, IMutateProfileUpdate } from '@/interface/user';
import { useForm, FormProvider } from 'react-hook-form';
import CoverImgInput from './CoverImgInput/CoverImgInput';
import ProfileImgInput from './ProfileImgInput/ProfileImgInput';
import NickNameInput from './NickNameInput/NickNameInput';

type Props = {
  user: IMovielogUser;
};

export default function EditProfileForm({ user }: Props) {
  const { bgImg, profileImg, nickName, introduction } = user;
  const methods = useForm<IMutateProfileUpdate>();
  const onValid = () => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onValid)}>
        <h2 className="text-body1">프로필 편집</h2>
        <section className="w-full flex justify-center items-center gap-[174px]">
          <ProfileImgInput profileImg={profileImg} />
          <CoverImgInput coverImg={bgImg} />
        </section>
        <NickNameInput nickName={nickName} />
      </form>
    </FormProvider>
  );
}
