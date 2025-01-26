import { useFunnel } from "@/hooks/useFunnel";
import InfoStep from "@/pages/SignupPage/components/InfoStep/InfoStep";
import { useEffect } from "react";

const SignupPage = () => {
  const Funnel = useFunnel();

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
        <div>Step 2 Content</div>
      </Funnel.Step>
    </Funnel>
  );
};

export default SignupPage;
