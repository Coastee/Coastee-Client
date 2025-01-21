import * as s from "@/components/Input/Input.styles";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "input" | "textarea";
  isError?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = ({
  variant = "input",
  isError = false,
  leftIcon,
  rightIcon,
  placeholder,
  id,
  value,
  maxLength,
  ...props
}: InputProps) => {
  return (
    <div css={s.wrapperStyle(!!leftIcon, !!rightIcon, isError)}>
      {leftIcon}
      <input
        css={s.inputStyle}
        placeholder={placeholder}
        id={id}
        value={value}
        {...(props as InputHTMLAttributes<HTMLInputElement>)}
      />
      <div css={{ cursor: "pointer" }}>{rightIcon}</div>
    </div>
  );
};

export default Input;
