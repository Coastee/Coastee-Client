import { Button } from "@/components";
import type { HTMLAttributes, ReactNode } from "react";
import * as s from "./TitleContainer.style";

export interface TitleContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  buttonText?: string;
  children: ReactNode;
}

const TitleContainer = ({
  title,
  buttonText,
  children,
  ...props
}: TitleContainerProps) => {
  return (
    <div css={s.titleContainerStyle} {...props}>
      <div css={s.headerStyle}>
        <h1 css={s.titleStyle}>{title}</h1>
        <Button variant="text">{buttonText}</Button>
      </div>
      {children}
    </div>
  );
};

export default TitleContainer;
