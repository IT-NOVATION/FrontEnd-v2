'use client';

import useBtnIsAbled from '@/hooks/useBtnIsAbled';
import useShowPassword from '@/hooks/useShowPassword';
import { ILoginForm } from '@/interface/account';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import EyeIcon from '@/ui/icons/EyeIcon';
import EyeInvisibleIcon from '@/ui/icons/EyeInvisibleIcon';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import Links from './Links/Links';
import SocailLogin from './SocialLogin/SocialLogin';
import { ModalState } from '@/interface/accountModal';
import { login } from '@/service/account';
import { data } from 'autoprefixer';
import { useQueryClient } from '@tanstack/react-query';

const errorTheme = 'border-theme-red';

export default function LoginForm() {
  const queryClient = useQueryClient();
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<ILoginForm>();
  const { type: passwordType, toggleShow } = useShowPassword();
  const showPassword = passwordType === 'password';
  const { isAbled, handleIsAbled } = useBtnIsAbled({
    watch,
    errors,
    modalState,
  });
  const onValid = async (data: ILoginForm) => {
    try {
      const { accessToken, refreshToken } = await login(data);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      await queryClient.invalidateQueries();
      setModalState(ModalState.Off);
      window.location.reload();
    } catch (err) {
      alert('이메일 혹은 비밀번호가 일치하지 않습니다.');
    }
  };
  return (
    <div className="w-[400px]">
      <p className="pt-[37px] pb-[32px]">간단하게 무비타임에 참여해볼까요?</p>
      <form onSubmit={handleSubmit(onValid)} onChange={handleIsAbled}>
        <div className="relative">
          <input
            className={`w-[406px] h-[35px] text-[16px] font-[400] mb-[29px] border-b border-theme-gray ${
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
            type="text"
          />
          <div className="w-full absolute top-[35px]">
            <p className="text-body5 text-theme-red">{errors.email?.message}</p>
          </div>
        </div>
        <div className="relative">
          <input
            className={`w-[406px] h-[35px] text-[16px] font-[400] mb-[29px] border-b border-theme-gray ${
              !!errors.password && errorTheme
            }`}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              onChange: () => trigger('password'),
            })}
            placeholder="비밀번호"
            type={passwordType}
          />
          <button
            onClick={toggleShow}
            className="absolute top-[5px] text-theme-gray right-0"
            type="button"
          >
            {showPassword ? <EyeIcon /> : <EyeInvisibleIcon />}
          </button>
          <div className="w-full absolute top-[35px]">
            <p className="text-body5 text-theme-red">
              {errors.password?.message}
            </p>
          </div>
        </div>
        <button
          disabled={!isAbled}
          className={`flex justify-center items-center w-[406px] h-[48px] rounded-[25.5px] text-white ${
            isAbled ? 'bg-theme-main' : 'bg-theme-gray'
          }`}
        >
          <p className="text-body1">로그인</p>
        </button>
      </form>
      <Links />
      <SocailLogin />
    </div>
  );
}
