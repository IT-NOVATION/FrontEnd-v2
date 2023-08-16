import AddProfileForm from '@/components/AccountModal/contents/AddProfileForm';
import ChangePasswordForm from '@/components/AccountModal/contents/ChangePasswordForm';
import GetCodeForm from '@/components/AccountModal/contents/GetCodeForm';
import LoginForm from '@/components/AccountModal/contents/LoginForm';
import Policy from '@/components/AccountModal/contents/Policy';
import SignupForm from '@/components/AccountModal/contents/SignupForm';
import Terms from '@/components/AccountModal/contents/Terms';
import TermsForm from '@/components/AccountModal/contents/TermsForm';
import { ModalState } from '@/interface/accountModal';
import { atom, selector } from 'recoil';

export const modalStateAtom = atom<ModalState>({
  key: 'modalState',
  default: ModalState.Off,
});

export const modalContentSelector = selector({
  key: 'modalContentSelector',
  get: ({ get }) => {
    const modalState = get(modalStateAtom);
    switch (modalState) {
      case ModalState.LoginForm:
        return LoginForm();
      case ModalState.TermsForm:
        return TermsForm();
      case ModalState.SignupForm:
        return SignupForm();
      case ModalState.AddProfileForm:
        return AddProfileForm();
      case ModalState.Terms:
        return Terms();
      case ModalState.Policy:
        return Policy();
      case ModalState.GetCodeForm:
        return GetCodeForm();
      case ModalState.ChangePasswordForm:
        return ChangePasswordForm();
    }
  },
});
