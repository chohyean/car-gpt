import { atom } from "recoil";

export const atomIsLogin = atom<boolean>({
  key: "isLogin",
  default: false,
});
