import useBtnIsAbled from '@/hooks/useBtnIsAbled';
import { IAddProfileForm } from '@/interface/account';
import { ModalState } from '@/interface/accountModal';
import { modalStateAtom } from '@/recoil/accountModalAtom';
import { addProfile } from '@/service/account';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

const errorTheme = 'border-theme-red';

export default function AddProfileForm() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    formState: { errors },
    watch,
  } = useForm<IAddProfileForm>({
    defaultValues: {
      nickname: '',
      introduction: '',
    },
  });

  const { isAbled, handleIsAbled } = useBtnIsAbled({
    watch,
    errors,
    modalState,
  });

  const handleGoLogin = () => setModalState(ModalState.LoginForm);

  const onValid = async ({ nickname, introduction }: IAddProfileForm) => {
    const email = localStorage.getItem('signup-email'); // 이전 회원가입 단계에서 입력했던 이메일 가져오기
    if (!email) throw Error('no email');
    try {
      await addProfile({ nickname, email, introduction });
      alert("It's Movie Time의 회원이 되신 걸 축하드립니다!");
      setModalState(ModalState.LoginForm);
    } catch (error) {
      setError('nickname', { message: '이미 사용중인 닉네임입니다.' });
    }
  };
  return (
    <section className="w-[400px]">
      <p className=" mt-[28px] mb-[40px]">회원가입</p>
      <form onChange={handleIsAbled} onSubmit={handleSubmit(onValid)}>
        <div className="relative mb-[29px]">
          <input
            className={`w-[406px] h-[35px] text-[16px] border-b border-theme-gray ${
              !!errors.nickname && errorTheme
            }`}
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
              pattern: {
                value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/,
                message: '한글, 영어, 숫자 포함 2-10 글자로 설정해주세요',
              },
              onChange: () => trigger('nickname'),
            })}
            placeholder="닉네임"
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.nickname?.message}
            </span>
          </div>
        </div>
        <div className="relative mb-[29px]">
          <input
            className={`w-[406px] h-[35px] text-[16px] border-b border-theme-gray ${
              !!errors.introduction && errorTheme
            }`}
            {...register('introduction', {
              maxLength: { value: 40, message: '한줄소개가 너무 깁니다' },
              onChange: () => trigger('introduction'),
            })}
            placeholder="한줄 소개 (50자 이내)"
          />
          <div className="w-full absolute top-[35px]">
            <span className="text-theme-red text-body5">
              {errors.introduction?.message}
            </span>
          </div>
        </div>
        <button
          disabled={!isAbled}
          className={`flex justify-center items-center w-[406px] h-[48px] rounded-[25.5px] text-white ${
            isAbled ? 'bg-theme-main' : 'bg-theme-gray'
          }`}
        >
          <p className="text-body1">제출</p>
        </button>
      </form>
      <div className="flex justify-center gap-[9px] mt-[10px]">
        <p className="text-black body-3">이미 가입하셨나요?</p>
        <button type="button">
          <p onClick={handleGoLogin} className="text-theme-main text-body3">
            로그인
          </p>
        </button>
      </div>
    </section>
  );
}
