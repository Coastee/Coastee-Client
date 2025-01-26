import { type ReactElement, type ReactNode, isValidElement, useState } from "react";

type FunnelStepProps = {
  name: string;
  children: ReactNode;
};

type FunnelComponent = {
  (props: { children: ReactNode }): ReactElement | null;
  Step: (props: FunnelStepProps) => ReactElement;
  setStep: (step: string) => void;
};

export const useFunnel = () => {
  const [step, setStep] = useState<string | null>(null);

  const Step = ({ name, children }: FunnelStepProps) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: { children: ReactNode }): ReactElement | null => {
    const stepsArray = Array.isArray(children) ? children : [children];

    const targetStep = stepsArray.find(
      (child): child is ReactElement<FunnelStepProps> =>
        isValidElement<FunnelStepProps>(child) && child.props.name === step,
    );

    return targetStep ?? null;
  };

  return Object.assign(Funnel, { Step, setStep }) as FunnelComponent;
};
