import { HomeIcon, CoffeeIcon, ChatIcon } from "../assets/svg"; // 임시 아이콘

export const MENU = [
  {
    id: "home",
    name: "홈",
    icon: HomeIcon,
    path: "home", // 상대 경로
  },
  {
    id: "group-chat",
    name: "그룹 챗",
    icon: ChatIcon,
    path: "group-chat",
  },
  {
    id: "offline-meeting",
    name: "오프라인 모임",
    icon: CoffeeIcon,
    path: "offline-meeting",
  },
];
