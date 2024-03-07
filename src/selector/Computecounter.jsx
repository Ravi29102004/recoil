import { selector } from "recoil";
import { counter } from "../atom/counter";
export const Computecounter = selector({
  key: "Computecounter",
  get: ({ get }) => {
    let value = get(counter);
    return value * 2;
  },
});
