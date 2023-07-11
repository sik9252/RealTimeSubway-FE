import Line_1 from "../../assets/1호선.svg";
import Line_2 from "../../assets/2호선.svg";
import Line_3 from "../../assets/3호선.svg";
import Line_4 from "../../assets/4호선.svg";
import Line_5 from "../../assets/5호선.svg";
import Line_6 from "../../assets/6호선.svg";
import Line_7 from "../../assets/7호선.svg";
import Line_8 from "../../assets/8호선.svg";
import Line_9 from "../../assets/9호선.svg";
import Incheon_1 from "../../assets/인천1호선.svg";
import Incheon_2 from "../../assets/인천2호선.svg";
import SuinBundang from "../../assets/수인분당선.svg";
import Shinbundang from "../../assets/신분당선.svg";
import GyeonguiCentral from "../../assets/경의중앙선.svg";
import AirRail from "../../assets/공항철도선.svg";
import Gyeongchun from "../../assets/경춘선.svg";
import UijeongbuRail from "../../assets/의정부경전철.svg";
import YonginRail from "../../assets/용인경전철.svg";
import Gyeonggang from "../../assets/경강선.svg";
import UiSinseol from "../../assets/우이신설선.svg";
import WestCoast from "../../assets/서해선.svg";
import GimpoUrbanRail from "../../assets/김포도시철도.svg";
import Sillim from "../../assets/신림선.png";

interface Line {
  id: number;
  name: string;
  icon: string;
}

export const lineList: Line[] = [
  {
    id: 1,
    name: "1호선",
    icon: Line_1,
  },
  {
    id: 2,
    name: "2호선",
    icon: Line_2,
  },
  {
    id: 3,
    name: "3호선",
    icon: Line_3,
  },
  {
    id: 4,
    name: "4호선",
    icon: Line_4,
  },
  {
    id: 5,
    name: "5호선",
    icon: Line_5,
  },
  {
    id: 6,
    name: "6호선",
    icon: Line_6,
  },
  {
    id: 7,
    name: "7호선",
    icon: Line_7,
  },
  {
    id: 8,
    name: "8호선",
    icon: Line_8,
  },
  {
    id: 9,
    name: "9호선",
    icon: Line_9,
  },
  {
    id: 10,
    name: "인천 1호선",
    icon: Incheon_1,
  },
  {
    id: 11,
    name: "인천 2호선",
    icon: Incheon_2,
  },
  {
    id: 12,
    name: "수인분당선",
    icon: SuinBundang,
  },
  {
    id: 13,
    name: "신분당선",
    icon: Shinbundang,
  },
  {
    id: 14,
    name: "경의중앙선",
    icon: GyeonguiCentral,
  },
  {
    id: 15,
    name: "공항철도",
    icon: AirRail,
  },
  {
    id: 16,
    name: "경춘선",
    icon: Gyeongchun,
  },
  {
    id: 17,
    name: "의정부경전철",
    icon: UijeongbuRail,
  },
  {
    id: 18,
    name: "용인경전철",
    icon: YonginRail,
  },
  {
    id: 19,
    name: "경강선",
    icon: Gyeonggang,
  },
  {
    id: 20,
    name: "우이신설경전철",
    icon: UiSinseol,
  },
  {
    id: 21,
    name: "서해선",
    icon: WestCoast,
  },
  {
    id: 22,
    name: "김포 도시철도",
    icon: GimpoUrbanRail,
  },
  {
    id: 23,
    name: "신림선",
    icon: Sillim,
  },
];
