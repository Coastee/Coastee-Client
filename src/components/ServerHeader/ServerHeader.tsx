import { PlusIcon } from "@/assets/svg";
import { SERVERINFO, ServerInfoType } from "@/constants/serverInfo";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  containerStyle,
  plusButtonStyle,
  serverItemStyle,
  serverListStyle,
} from "./ServerHeader.styles";

const ServerHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [myServerId, setMyServerId] = useState<number[]>([1, 4, 5, 7]); // dummy data
  const myServerSet = new Set(myServerId);

  const handleNavigate = (serverId: number) => {
    let pathWithoutServer = location.pathname.replace(/^\/\d+(\/|$)/, "/");
    if (!pathWithoutServer || pathWithoutServer === "/") {
      pathWithoutServer = "/home";
    }
    navigate(`/${serverId}${pathWithoutServer}`);
  };
  
  return (
    <div css={containerStyle}>
      <ul css={serverListStyle}>
        {SERVERINFO.filter((server: ServerInfoType) =>
          myServerSet.has(server.id)
        ).map((server: ServerInfoType) => {
          const Icon = server.icon;
          return (
            <li
              key={server.id}
              css={serverItemStyle}
              onClick={() => handleNavigate(server.id)}
            >
              <Icon />
            </li>
          );
        })}
      </ul>
      <PlusIcon css={plusButtonStyle} />
    </div>
  );
};

export default ServerHeader;
