import { inputStyle } from "@/components/Input/Input.styles";
import * as s from "@/components/Textarea/Textarea.styles";
import { theme } from "@/styles/theme/theme";
import {
  type ForwardedRef,
  type TextareaHTMLAttributes,
  forwardRef,
  useState,
} from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      isError = false,
      placeholder,
      id,
      value = "",
      maxLength,
      ...props
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    const [text, setText] = useState(value.toString());
    const [count, setCount] = useState(text.length);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      setCount(e.target.value.length);

      props.onChange?.(e);
    };

    return (
      <div css={s.wrapperStyle(isError)}>
        <textarea
          css={[inputStyle, s.textareaStyle]}
          placeholder={placeholder}
          id={id}
          ref={ref}
          maxLength={maxLength}
          value={text}
          onChange={handleChange}
          tabIndex={0}
          {...props}
        />
        {maxLength && (
          <div css={s.countStyle}>
            <p css={{ color: `${theme.color.primaryBlue2}` }}>{count}</p> /
            {maxLength}
          </div>
        )}
      </div>
    );
  }
);

export default Textarea;
