import { atom } from "recoil";

export const atomSelectedCsmr = atom<string>({
  key: "SelectedCsmr",
  default: undefined,
});
