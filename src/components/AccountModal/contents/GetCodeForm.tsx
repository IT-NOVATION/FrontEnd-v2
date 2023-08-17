'use client';

import useBtnIsAbled from '@/hooks/useBtnIsAbled';
import { IGetCodeForm } from '@/interface/account';
import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { checkCode, sendCode } from '../../../service/account';

const errorTheme = 'border-theme-red';

export default function GetCodeForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<IGetCodeForm>();

  const { isAbled, handleIsAbled } = useBtnIsAbled({
    watch,
    errors,
    modalState,
  });
  const [emailSent, setEmailSent] = useState(false);

  const onValid = async (data: IGetCodeForm) => {
    const email = data.email;
    emailSent
      ? await checkCode(data).then(() => {
          localStorage.setItem('passwordFind-email', data.email);
          setModalState(ModalState.ChangePasswordForm);
        })
      : await sendCode({ email })
          .then(() => setEmailSent(true))
          .catch(() => alert('존재하지 않는 이메일입니다'));
  };
  return (
    <section className="w-[400px]">
      <p className="text-body1 mt-[30px] mb-[35px]">
        비밀번호를 잊어버리셨나요?{'\n'}가입하신 이메일로 인증번호를 받아보세요
      </p>
      <form onSubmit={handleSubmit(onValid)} onChange={handleIsAbled}>
        <div className="relative mb-[29px]">
          <input
            className={`w-[406px] h-[35px] text-[16px] border-b border-theme-gray ${
              !!errors.email && errorTheme
            }`}
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: '정확하지 않은 이메일입니다',
              },
              onChange: () => trigger('email'),
            })}
            placeholder="이메일"
            type="email"
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.email?.message}
            </span>
          </div>
        </div>
        <div className="relative mb-[29px]">
          <input
            className={`w-[406px] h-[35px] text-[16px] border-b border-theme-gray ${
              !!errors.code && errorTheme
            }`}
            {...register('code', {
              required: emailSent && '인증코드를 입력해주세요.',
              onChange: () => trigger('code'),
            })}
            placeholder="인증번호"
            type="text"
            disabled={!emailSent}
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.code?.message}
            </span>
          </div>
        </div>
        <button
          disabled={!isAbled}
          className={`flex justify-center items-center w-[406px] h-[48px] rounded-[25.5px] text-white ${
            isAbled ? 'bg-theme-main' : 'bg-theme-gray'
          }`}
        >
          <p className="text-body1">
            {emailSent ? '인증번호 확인' : '인증번호 전송'}
          </p>
        </button>
      </form>
    </section>
  );
}
