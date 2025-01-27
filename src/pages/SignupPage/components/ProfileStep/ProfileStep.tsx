import { AuthContainer, Button, Input, Textarea } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

interface ProfileStepProps {
  onPrev: () => void;
  onNext: () => void;
}

const ProfileStep = ({ onPrev, onNext }: ProfileStepProps) => {
  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input placeholder={PLACEHOLDER.BELONGING} />
      <Textarea placeholder={PLACEHOLDER.INTRODUCTION} maxLength={80} css={{ height: "10rem" }} />
      <div css={{ display: "flex", gap: "2rem" }}>
        <Button variant="secondary" onClick={onPrev}>
          이전
        </Button>
        <Button onClick={onNext}>다음</Button>
      </div>
    </AuthContainer>
  );
};

export default ProfileStep;
