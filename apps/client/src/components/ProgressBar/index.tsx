import { RegisterFormMethods } from "@/app/cadastro/page";
import { useFormContext } from "react-hook-form";

export const ProgressBar = () => {
  const { watch } = useFormContext<RegisterFormMethods>();

  const step = watch("step");
  const totalStep = watch("total");

  return (
    <span
      className="bg-purple h-1 absolute bottom-0 left-[0.5px]"
      style={{ width: `${(step * 99.9) / totalStep}%` }}
    />
  );
};
