import { atom } from "recoil";

export const optionsState = atom({
  key: "optionsState",
  default: {
    rows: 10,
    columns: 10,
    bombs: 10
  },
});
