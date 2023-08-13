import { useFormContext } from "react-hook-form";
import { Step1 } from "./Step1-Email";
import { Step2 } from "./Step2-Password";
import { RegisterFormMethods } from "@/app/cadastro/page";
import { Step3 } from "./Step3-Coupon";

export const RegisterForm: React.FC<Props> = () => {
  const { watch } = useFormContext<RegisterFormMethods>();

  const step = watch("step");

  const steps: Record<number, React.ReactNode> = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
  };

  return <form className="w-full">{steps[step]}</form>;
};

type Props = React.FormHTMLAttributes<HTMLFormElement>;
