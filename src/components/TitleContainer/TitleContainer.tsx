import { ArrowDownIcon } from "@/assets/svg";
import { Button } from "@/components";
import type { HTMLAttributes, ReactNode } from "react";
import * as s from "./TitleContainer.style";

export interface TitleContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  buttonText?: string;
  filterText?: string;
  handleButtonClick?: () => void;
  handleFilterClick?: () => void;
  children?: ReactNode;
}

const TitleContainer = ({
  title,
  buttonText,
  filterText,
  handleButtonClick,
  handleFilterClick,
  children,
  ...props
}: TitleContainerProps) => {
  return (
    <div css={s.titleContainerStyle} {...props}>
      {title && (
        <div css={s.headerStyle}>
          <h1 css={s.titleStyle}>{title}</h1>
          {buttonText && (
            <Button variant="text" onClick={handleButtonClick}>
              {buttonText}
            </Button>
          )}
          {filterText && (
            <Button variant="sorting" onClick={handleFilterClick}>
              <ArrowDownIcon width={10} />
              {filterText}
            </Button>
          )}
        </div>
      )}
      <div css={s.contentStyle}>{children}</div>
    </div>
  );
};

export default TitleContainer;
