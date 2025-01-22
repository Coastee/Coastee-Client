import * as s from "./HomePage.styles";
import { ServerHeader } from "@/components/ServerHeader/ServerHeader";

export const HomePage = () => {
  return (
    <div css={s.containerStyle}>
      <ServerHeader />
    </div>
  );
};
