import { atom } from "recoil";

export const filterAtom = atom({
    key: 'filterAtom',
    default: "", // Default filter is an empty string
  });