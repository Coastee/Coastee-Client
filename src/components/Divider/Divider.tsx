import * as s from "@/components/Divider/Divider.style";

import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: "single" | "date";
}

const Divider = ({ variant = "single", children }: DividerProps) => {
  return (
    <div css={s.wrapperStyle(variant)}>
      <hr css={s.dividerStyle} />
      {variant === "date" && <p css={s.childrenStyle}>{children}</p>}
      <hr css={s.dividerStyle} />
    </div>
  );
};

export default Divider;
