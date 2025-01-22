import { Logo2Icon } from "@/assets/svg";
import * as s from "@/components/AuthContainer/AuthContainer.styles";
import type { ReactNode } from "react";

interface AuthContainerProps {
  title?: string;
  desc?: string;
  children: ReactNode;
}

const AuthContainer = ({ title, desc, children }: AuthContainerProps) => {
  return (
    <section css={s.sectionStyle}>
      <div css={s.sideStyle}>
        <Logo2Icon width={62} height={38} />
        <h1 css={s.titleStyle}>{title}</h1>
        <h2 css={s.descStyle}>{desc}</h2>
      </div>
      <div css={[s.childrenStyle]}>{children}</div>
    </section>
  );
};

export default AuthContainer;
