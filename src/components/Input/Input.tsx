import { inputStyle, wrapperStyle } from "@/components/Input/Input.styles";
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
  ...props
}: InputProps) => {
  return (
    <div css={wrapperStyle(!!leftIcon, !!rightIcon, isError)}>
      {leftIcon}
      <input
        css={inputStyle}
        placeholder={placeholder}
        id={id}
        value={value}
        {...props}
      />
      <div css={{ cursor: "pointer" }}>{rightIcon}</div>
    </div>
  );
};

export default Input;
