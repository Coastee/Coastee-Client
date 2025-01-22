import {
  containerStyle,
  serverListStyle,
  serverItemStyle,
  plusButtonStyle,
} from "./ServerHeader.styles";
import { Logo1Icon, Logo2Icon, Logo3Icon, PlusIcon } from "@/assets/svg";

const serverData = [
  {
    id: 1,
    name: "server1",
    icon: Logo1Icon,
  },
  {
    id: 2,
    name: "server2",
    icon: Logo2Icon,
  },
  {
    id: 3,
    name: "server3",
    icon: Logo3Icon,
  },
];

const ServerHeader = () => {
  return (
    <div css={containerStyle}>
      <ul css={serverListStyle}>
        {serverData.map((server) => {
          const Icon = server.icon;
          return <Icon key={server.id} css={serverItemStyle} />;
        })}
      </ul>
      <PlusIcon css={plusButtonStyle} />
    </div>
  );
};

export default ServerHeader;
