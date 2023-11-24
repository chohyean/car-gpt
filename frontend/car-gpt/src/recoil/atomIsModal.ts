import { atom } from "recoil";

export const atomIsModal = atom<boolean>({
  key: "isModal",
  default: false,
});
