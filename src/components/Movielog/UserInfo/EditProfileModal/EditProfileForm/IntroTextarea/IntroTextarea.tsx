import { IMutateProfileUpdate } from '@/interface/user';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const PLACEHOLDER_TEXT = '간단한 소개를 입력해주세요. (50자 이내)';

type Props = {
  introduction?: string;
};

export default function IntroTextarea({ introduction }: Props) {
  const {
    register,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext<IMutateProfileUpdate>();

  useEffect(() => {
    introduction && setValue('introduction', introduction);
  }, [introduction]);

  return (
    <section>
      <h2 className="ml-[3px] text-body5 mt-[10px]">한 줄 소개</h2>
      <textarea
        className="w-full h-[58px] text-body4 border-[0.7px] border-theme-gray mt-[10px] px-[8px] py-[5px]"
        placeholder={PLACEHOLDER_TEXT}
        {...register('introduction', {
          maxLength: { value: 40, message: '한줄소개가 너무 깁니다' },
          onChange: () => trigger('introduction'),
        })}
      />
      <h2 className="ml-[4px] h-[13px] w-full text-body5 text-theme-red">
        {errors.introduction?.message}
      </h2>
    </section>
  );
}
