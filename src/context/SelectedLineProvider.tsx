import { useState, PropsWithChildren } from "react";
import { SelectedLineContext } from "./SelectedLineContext";

export function SelectLineProvider({ children }: PropsWithChildren) {
  const [selectedLine, setSelectedLine] = useState<string>("1호선");

  const selectLine = (line: string) => {
    setSelectedLine(line);
    // 나중에 여기에 선택된 호선에 따라 알맞는 노선도 이미지 내려주는 코드 작성하기
  };

  return (
    <SelectedLineContext.Provider value={{ selectedLine, selectLine }}>
      {children}
    </SelectedLineContext.Provider>
  );
}
