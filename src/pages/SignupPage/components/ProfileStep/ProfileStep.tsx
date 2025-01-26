import { Button } from "@/components";
import AuthContainer from "@/components/AuthContainer/AuthContainer";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";
import { PLACEHOLDER } from "@/constants/placeholder";
import { DESC, TITLE } from "@/constants/signup";

const ProfileStep = () => {
  return (
    <AuthContainer title={TITLE.PROFILE} desc={DESC.BASIC_INFO}>
      <Input placeholder={PLACEHOLDER.BELONGING} />
      <Textarea placeholder={PLACEHOLDER.INTRODUCTION} maxLength={80} css={{ height: "10rem" }} />
      <Button>다음</Button>
    </AuthContainer>
  );
};

export default ProfileStep;
