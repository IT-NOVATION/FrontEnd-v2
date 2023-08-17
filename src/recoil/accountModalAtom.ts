import { ModalState } from '@/interface/accountModal';
import { atom } from 'recoil';

export const modalStateAtom = atom<ModalState>({
  key: 'modalState',
  default: ModalState.Off,
});
