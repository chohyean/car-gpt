import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const atomIsLogin = atom<boolean>({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
