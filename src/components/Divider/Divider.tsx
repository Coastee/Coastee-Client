import {
  childrenStyle,
  dividerStyle,
  wrapperStyle,
} from "@/components/Divider/Divider.style";

import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: "single" | "date";
}

const Divider = ({ variant = "single", children }: DividerProps) => {
  return (
    <div css={wrapperStyle(variant)}>
      <hr css={dividerStyle} />
      <p css={childrenStyle}>{children}</p>
      <hr css={dividerStyle} />
    </div>
  );
};

export default Divider;
