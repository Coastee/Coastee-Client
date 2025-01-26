import { PlusIcon } from "@/assets/svg";
import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";
import * as s from "@/pages/SignupPage/components/ContactStep/ContactStep.styles";
import { useState } from "react";

interface ContactStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ContactStep = ({ onPrev, onNext }: ContactStepProps) => {
  const [urls, setUrls] = useState<string[]>([""]);

  const handleAddInput = () => {
    setUrls([...urls, ""]);
  };

  const handleChange = (index: number, value: string) => {
    setUrls((prev) => prev.map((url, i) => (i === index ? value : url)));
  };

  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <div css={s.urlLayoutStyle}>
        {urls.map((url, index) => (
          <Input
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            placeholder={PLACEHOLDER.URL}
            value={url}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <PlusIcon width={16} height={16} css={{ cursor: "pointer", flexShrink: "0" }} onClick={handleAddInput} />
      <div css={s.btnLayoutStyle}>
        <Button variant="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </AuthContainer>
  );
};

export default ContactStep;
