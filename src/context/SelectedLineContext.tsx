import { createContext } from "react";

type SelectedLineContextType = {
  selectedLine: string;
  selectLine: (lineName: string) => void;
};

export const SelectedLineContext =
  createContext<SelectedLineContextType | null>(null);
