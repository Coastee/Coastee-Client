import { AuthContainer, Button, CheckBox } from "@/components";
import { DESC, INTERESTS, TITLE } from "@/constants/signup";
import * as s from "@/pages/SignupPage/components/InterestStep/InterestStep.styles";
import { useState } from "react";

interface InterestStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const InterestStep = ({ onPrev, onNext }: InterestStepProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleCheckboxChange = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest],
    );
  };

  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.INTEREST_INFO} size="large">
      <div css={s.boxWrapperStyle}>
        {INTERESTS.map((field) => (
          <div key={field} css={s.boxLayoutStyle}>
            <CheckBox
              id={field}
              isChecked={selectedInterests.includes(field)}
              onChange={() => handleCheckboxChange(field)}
            />
            <label htmlFor={field} css={s.labelStyle}>
              {field}
            </label>
          </div>
        ))}
      </div>
      <div css={{ display: "flex", gap: "2.6rem" }}>
        <Button onClick={onPrev} variant="secondary">
          이전
        </Button>
        <Button variant="secondary" onClick={onNext}>
          선택 안 함
        </Button>
        <Button onClick={onNext} disabled={selectedInterests.length === 0}>
          다음
        </Button>
      </div>
    </AuthContainer>
  );
};

export default InterestStep;
