import { inputStyle } from "@/components/Input/Input.styles";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "count";
  isError?: boolean;
}

const Input = ({
  variant = "primary",
  isError = false,
  placeholder,
  maxLength,
  value,
}: InputProps) => {
  return <input css={inputStyle} placeholder={placeholder} value={value} />;
};

export default Input;
