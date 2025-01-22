import {
  containerStyle,
  logoStyle,
  menuListStyle,
  menuItemStyle,
} from "./MenuHeader.styles";
import { Logo4Icon, HomeIcon, CoffeeIcon, ChatIcon } from "@/assets/svg";

const menuData = [
  {
    id: 1,
    name: "홈",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "그룹 챗",
    icon: ChatIcon,
  },
  {
    id: 3,
    name: "오프라인 모임",
    icon: CoffeeIcon,
  },
];

const MenuHeader = () => {
  return (
    <div css={containerStyle}>
      <Logo4Icon css={logoStyle} />
      <ul css={menuListStyle}>
        {menuData.map((menu) => {
          const Icon = menu.icon;
          return (
            <li key={menu.id} css={menuItemStyle}>
              <Icon />
              <span>{menu.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuHeader;
