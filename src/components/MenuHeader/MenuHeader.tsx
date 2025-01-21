import { Logo4Icon } from "@/assets/svg";
import { MENU } from "@/constants/menu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  activeMenuItemStyle,
  containerStyle,
  logoStyle,
  menuItemStyle,
  menuListStyle,
} from "./MenuHeader.styles";

const MenuHeader = () => {
  const navigate = useNavigate();
  const { serverId } = useParams<{ serverId: string }>();
  const location = useLocation();

  const handleNavigate = (relativePath: string) => {
    if (serverId) {
      navigate(`/${serverId}/${relativePath}`);
    }
  };

  const isActiveMenu = (relativePath: string) => {
    return location.pathname.startsWith(`/${serverId}/${relativePath}`);
  };

  return (
    <div css={containerStyle}>
      <Logo4Icon css={logoStyle} />
      <ul css={menuListStyle}>
        {MENU.map((menu) => {
          const Icon = menu.icon;
          return (
            <li
              key={menu.id}
              css={[
                menuItemStyle,
                isActiveMenu(menu.path) && activeMenuItemStyle,
              ]}
              onClick={() => handleNavigate(menu.path)}
            >
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
