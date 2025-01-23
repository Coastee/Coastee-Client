import logo1Img from "@/assets/img/logo1Img.png";
import logo2Img from "@/assets/img/logo2Img.png";
import { Logo2WhiteIcon } from "@/assets/svg";
import * as s from "@/components/AuthContainer/AuthContainer.styles";
import type { ReactNode } from "react";

interface AuthContainerProps {
  title?: string;
  desc?: ReactNode;
  children?: ReactNode;
}

const AuthContainer = ({ title, desc, children }: AuthContainerProps) => {
  return (
    <div css={s.wrapperStyle} className="background">
      <img src={logo1Img} alt="로고1" css={s.logo1Style} />
      <img src={logo2Img} alt="로고2" css={s.logo2Style} />
      <section css={s.sectionStyle}>
        <div css={s.sideStyle}>
          <Logo2WhiteIcon width={62} height={38} css={{ marginBottom: "3.2rem" }} />
          <h1 css={s.titleStyle}>{title}</h1>
          <h2 css={s.descStyle}>{desc}</h2>
        </div>
        <div css={s.childrenStyle}>{children}</div>
      </section>
    </div>
  );
};

export default AuthContainer;
