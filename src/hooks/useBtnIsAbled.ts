import { useState } from 'react';
import { FieldErrors, UseFormWatch } from 'react-hook-form';
import { ILoginForm } from '@/interface/account';
import { ModalState } from '@/interface/accountModal';

type Props = {
  watch: UseFormWatch<any>;
  errors: FieldErrors<ILoginForm>;
  modalState: number;
};

export default function useBtnIsAbled<T>({ watch, errors, modalState }: Props) {
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const handleIsAbled = () => {
    if (modalState === ModalState.LoginForm) {
      if (
        watch('email')?.length &&
        watch('password')?.length &&
        !errors.email?.message
      )
        setIsAbled(true);
      else setIsAbled(false);
    }
    // if (modalState === 3) {
    //   if (
    //     //모든 항목들이 입력됐고, 에러가 없을 때만 제출 가능
    //     watch("email")?.length &&
    //     watch("password")?.length &&
    //     watch("verifyPassword")?.length &&
    //     !errors.email?.message &&
    //     !errors.password?.message &&
    //     !errors.verifyPassword?.message
    //   ) {
    //     setIsAbled(true);
    //   } else setIsAbled(false);
    // }
    // if (modalState === 4) {
    //   if (watch("nickname")?.length && !errors.nickname?.message) {
    //     setIsAbled(true);
    //   } else setIsAbled(false);
    // }
    // if (modalState === 7) {
    //   if (watch("email")?.length && !errors.email?.message) {
    //     setIsAbled(true);
    //   } else setIsAbled(false);
    // }
  };
  return { isAbled, setIsAbled, handleIsAbled };
}
