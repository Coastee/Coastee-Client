import { MenuHeader, ServerHeader } from "@/components";
import * as s from "./HomePage.styles";

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
