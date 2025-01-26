import { PlusIcon } from "@/assets/svg";
import { AuthContainer, Button, Input } from "@/components";

import { PLACEHOLDER } from "@/constants/placeholder";
import { TITLE } from "@/constants/signup";

interface ContactStepProps {
  onNext: () => void;
}

const ContactStep = ({ onNext }: ContactStepProps) => {
  return (
    <AuthContainer title={TITLE.PROFILE}>
      <Input placeholder={PLACEHOLDER.URL} />
      <PlusIcon width={16} height={16} />
      <Button onClick={onNext}>다음</Button>
    </AuthContainer>
  );
};

export default ContactStep;
