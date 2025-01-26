import { PlusIcon } from "@/assets/svg";
import { AuthContainer, Button, Input } from "@/components";

import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

interface ContactStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ContactStep = ({ onPrev, onNext }: ContactStepProps) => {
  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input placeholder={PLACEHOLDER.URL} />
      <PlusIcon width={16} height={16} css={{ cursor: "pointer" }} />
      <div css={{ display: "flex", gap: "2rem", marginTop: "auto" }}>
        <Button variant="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </AuthContainer>
  );
};

export default ContactStep;
