import { inputStyle } from "@/components/Input/Input.styles";
import * as s from "@/components/Textarea/Textarea.styles";
import { type TextareaHTMLAttributes, useState } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = ({
  isError = false,
  placeholder,
  id,
  value,
  maxLength,
  ...props
}: TextareaProps) => {
  const [count, setCount] = useState(value ? value.toString().length : 0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    props.onChange?.(e);
  };

  return (
    <div css={s.wrapperStyle(isError)}>
      <textarea
        css={[inputStyle, s.textareaStyle]}
        placeholder={placeholder}
        id={id}
        value={value}
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        onChange={handleChange}
      />
      <p css={s.countStyle}>
        {count} / {maxLength}
      </p>
    </div>
  );
};

export default Textarea;
