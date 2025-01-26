import { AuthContainer, Button, Input } from "@/components";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

interface InfoStepProps {
  onNext: () => void;
}

const InfoStep = ({ onNext }: InfoStepProps) => {
  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input placeholder={PLACEHOLDER.NAME} />
      <Input placeholder={PLACEHOLDER.NICKNAME} />
      <Input placeholder={PLACEHOLDER.BIRTH} />
      <Button onClick={onNext}>다음</Button>
    </AuthContainer>
  );
};

export default InfoStep;
