import { atom } from 'recoil';

export const TAB = atom<string>({
  key: '#selected_tab',
  default: 'TRANDING',
});
