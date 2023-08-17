import useBtnIsAbled from '@/hooks/useBtnIsAbled';
import useShowPassword from '@/hooks/useShowPassword';
import { ISignupForm } from '@/interface/account';
import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import EyeIcon from '@/ui/icons/EyeIcon';
import EyeInvisibleIcon from '@/ui/icons/EyeInvisibleIcon';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

const errorTheme = 'border-theme-red';

export default function SignupForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
    watch,
  } = useForm<ISignupForm>();
  const password = useShowPassword();
  const verifyPassword = useShowPassword();
  const handleGoLogin = () => setModalState(ModalState.LoginForm);
  const { isAbled, setIsAbled, handleIsAbled } = useBtnIsAbled({
    watch,
    errors,
    modalState,
  });

  const onValid = async ({ email, password }: ISignupForm) => {
    // TODO: 회원가입 서버 연동 로직 추가
  };
  return (
    <section className="w-[400px]">
      <p className="text-black mt-[28px] mb-[40px]">회원가입</p>
      <form onChange={handleIsAbled} onSubmit={handleSubmit(onValid)}>
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
            type="text"
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
              !!errors.password && errorTheme
            }`}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
                message: '비밀번호는 영문/숫자/특수문자 조합 8~16자 입니다',
              },
              onChange: () => trigger('password'),
            })}
            placeholder="비밀번호 (영문/숫자/특수문자 조합 8~16자)"
            type={`${password.type}`}
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.password?.message}
            </span>
          </div>
          <button
            onClick={password.toggleShow}
            className="absolute top-[5px] right-0 text-theme-gray"
          >
            {password.type === 'password' ? <EyeIcon /> : <EyeInvisibleIcon />}
          </button>
        </div>
        <div className="relative mb-[29px]">
          <input
            className={`w-[406px] h-[35px] text-[16px] border-b border-theme-gray ${
              !!errors.verifyPassword && errorTheme
            }`}
            {...register('verifyPassword', {
              required: '비밀번호를 입력해주세요',
              onChange: () => {
                if (watch('password') !== watch('verifyPassword')) {
                  setError('verifyPassword', {
                    message: '비밀번호가 일치하지 않습니다',
                  });
                } else {
                  clearErrors('verifyPassword');
                  setIsAbled(true);
                }
              },
            })}
            placeholder="비밀번호 확인"
            type={`${verifyPassword.type}`}
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.verifyPassword?.message}
            </span>
          </div>
          <button
            onClick={verifyPassword.toggleShow}
            className="absolute top-[5px] right-0 text-theme-gray"
          >
            {verifyPassword.type === 'password' ? (
              <EyeIcon />
            ) : (
              <EyeInvisibleIcon />
            )}
          </button>
        </div>
        <button
          disabled={!isAbled}
          className={`flex justify-center items-center w-[406px] h-[48px] rounded-[25.5px] text-white ${
            isAbled ? 'bg-theme-main' : 'bg-theme-gray'
          }`}
        >
          <p className="text-body1">회원가입</p>
        </button>
      </form>
      <div className="flex justify-center gap-[9px] mt-[10px]">
        <p className="text-black body-3">이미 가입하셨나요?</p>
        <button>
          <p onClick={handleGoLogin} className="text-theme-main text-body3">
            로그인
          </p>
        </button>
      </div>
    </section>
  );
}
