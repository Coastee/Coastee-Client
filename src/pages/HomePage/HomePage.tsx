import * as s from "./HomePage.styles";
import { ServerHeader, MenuHeader } from "@/components";

export const HomePage = () => {
  return (
    <div css={s.containerStyle}>
      <div css={s.HeaderListStyle}>
        <ServerHeader />
        <MenuHeader />
      </div>
    </div>
  );
};
