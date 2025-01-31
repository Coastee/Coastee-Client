import profileBgImg from "@/assets/img/profileBgImg.png";
import profileImg from "@/assets/img/profileImg.png";
import recommendedProfileImg from "@/assets/img/recommendProfileImg.png";

export const DUMMY_PROFILE = {
  backgroundImg: profileBgImg,
  profileImg: profileImg,
  name: "John Doe",
  oneLineIntro: "Passionate Frontend Developer",
  Intro:
    "I specialize in building modern, user-friendly web applications using React and TypeScript. Always eager to learn and improve UX.I specialize in building modern, user-friendly web applications using React and TypeScript. Always eager to learn and improve UX.I specialize in building modern, user-friendly web applications using React and TypeScript. Always eager to learn and improve UX.",
  urls: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe"],
};

export const PROFILE_LIST = [
  {
    id: 1,
    img: recommendedProfileImg,
    name: "김준희",
    intro: "프론트엔드 개발자",
    experience: 5,
    role: "홈 프로텍터",
  },
  {
    id: 2,
    img: recommendedProfileImg,
    name: "윤서연",
    intro: "UX/UI 디자이너",
    experience: 3,
    role: "프로덕트 디자이너",
  },
  {
    id: 3,
    img: recommendedProfileImg,
    name: "박동우",
    intro: "백엔드 개발자",
    experience: 7,
    role: "서버 엔지니어",
  },
  {
    id: 4,
    img: recommendedProfileImg,
    name: "이하준",
    intro: "AI 엔지니어",
    experience: 4,
    role: "머신러닝 리서처",
  },
  {
    id: 5,
    img: recommendedProfileImg,
    name: "서지현",
    intro: "프로젝트 매니저",
    experience: 6,
    role: "프로덕트 매니저",
  },
  {
    id: 6,
    img: recommendedProfileImg,
    name: "한예린",
    intro: "iOS 개발자",
    experience: 2,
    role: "모바일 앱 개발자",
  },
  {
    id: 7,
    img: recommendedProfileImg,
    name: "최태혁",
    intro: "데이터 분석가",
    experience: 5,
    role: "BI 엔지니어",
  },
  {
    id: 8,
    img: recommendedProfileImg,
    name: "민경민",
    intro: "게임 클라이언트 개발자",
    experience: 3,
    role: "언리얼 엔지니어",
  },
  {
    id: 9,
    img: recommendedProfileImg,
    name: "송은채",
    intro: "풀스택 개발자",
    experience: 6,
    role: "웹서비스 개발자",
  },
  {
    id: 10,
    img: recommendedProfileImg,
    name: "황우진",
    intro: "보안 엔지니어",
    experience: 8,
    role: "시스템 보안 전문가",
  },
];
