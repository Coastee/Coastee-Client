import * as s from "@/components/Input/Input.styles";
import {
  type ForwardedRef,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isError = false,
      leftIcon,
      rightIcon,
      placeholder,
      id,
      value,
      maxLength,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div css={s.wrapperStyle(!!leftIcon, !!rightIcon, isError)}>
        {leftIcon}
        <input
          css={s.inputStyle}
          placeholder={placeholder}
          id={id}
          ref={ref}
          value={value}
          {...props}
        />
        <div css={{ cursor: "pointer" }}>{rightIcon}</div>
      </div>
    );
  }
);

export default Input;
