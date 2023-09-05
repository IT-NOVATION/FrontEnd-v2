import { IMutateProfileUpdate } from '@/interface/user';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  nickName: string;
};
export default function NickNameInput({ nickName }: Props) {
  const {
    register,
    formState: { errors },
    trigger,
    setValue,
  } = useFormContext<IMutateProfileUpdate>();
  useEffect(() => {
    setValue('nickname', nickName);
  }, [nickName]);
  return (
    <section className="w-full mt-[30px] ">
      <h2 className="text-body5">
        닉네임 <span className="text-theme-main">*</span>
      </h2>
      <input
        {...register('nickname', {
          required: '닉네임을 입력해주세요',
          pattern: {
            value: /^[a-z0-9가-힣]{2,10}$/,
            message:
              '한글, 영어, 숫자 포함 2-10 글자로 설정해주세요 (특수문자 불가)',
          },
          onChange: () => trigger('nickname'),
        })}
        type="text"
        className="w-full h-[23px] mt-[9px]  border-b-[0.7px] border-theme-gray text-body5 pb-[5px]"
      />
      <h2 className="h-[15px] w-full text-body5 text-theme-red">
        {errors.nickname?.message}
      </h2>
    </section>
  );
}
