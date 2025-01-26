import { useFunnel } from "@/hooks/useFunnel";
import ContactStep from "@/pages/SignupPage/components/ContactStep/ContactStep";
import InfoStep from "@/pages/SignupPage/components/InfoStep/InfoStep";
import InterestStep from "@/pages/SignupPage/components/InterestStep/InterestStep";
import ProfileStep from "@/pages/SignupPage/components/ProfileStep/ProfileStep";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const Funnel = useFunnel();

  const navigate = useNavigate();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    Funnel.setStep("step1");
  }, []);

  return (
    <Funnel>
      <Funnel.Step name="step1">
        <InfoStep onNext={() => Funnel.setStep("step2")} />
      </Funnel.Step>
      <Funnel.Step name="step2">
        <ProfileStep onNext={() => Funnel.setStep("step3")} />
      </Funnel.Step>
      <Funnel.Step name="step3">
        <ContactStep onNext={() => Funnel.setStep("step4")} />
      </Funnel.Step>
      <Funnel.Step name="step4">
        <InterestStep onNext={() => navigate("/")} />
      </Funnel.Step>
    </Funnel>
  );
};

export default SignupPage;
