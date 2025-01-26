import { AuthContainer, Button, Input, Textarea } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

interface ProfileStepProps {
  onNext: () => void;
}

const ProfileStep = ({ onNext }: ProfileStepProps) => {
  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input placeholder={PLACEHOLDER.BELONGING} />
      <Textarea placeholder={PLACEHOLDER.INTRODUCTION} maxLength={80} css={{ height: "10rem" }} />
      <Button onClick={onNext}>다음</Button>
    </AuthContainer>
  );
};

export default ProfileStep;
