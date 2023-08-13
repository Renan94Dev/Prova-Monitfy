"use client";

import { ProgressBar } from "@/components/ProgressBar";
import { RegisterForm } from "@/components/RegisterForm/Form";
import { TobBar } from "@/components/TobBar";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export default function Register() {
  const formMethods = useForm<RegisterFormMethods>({
    defaultValues: {
      step: 1,
      total: 3,
    },
  });

  return (
    <main className="grid grid-cols-1 grid-rows-[min-content_1fr] items-stretch min-h-screen flex-col p-6 gap-4">
      <TobBar.TobBarRoot>
        <TobBar.TobBarLogo />
      </TobBar.TobBarRoot>

      <Box className="w-full h-full grid grid-rows-[1fr_120px] rounded-2xl">
        <FormProvider {...formMethods}>
          <div className="flex flex-col items-center justify-center relative py-11">
            <div className="w-[458px]">
              <RegisterForm />
            </div>

            <ProgressBar />
          </div>

          <Navigation />
        </FormProvider>
      </Box>
    </main>
  );
}

const Navigation = () => {
  const { watch, setValue, getValues } = useFormContext<RegisterFormMethods>();
  const [disabled, setDisabled] = useState(true);

  const step = watch("step");
  const totalStep = watch("total");
  const email = watch("email");
  const password = watch("password");
  const passwordRepeat = watch("passwordRepeat");
  const indicateCoupon = watch("indicateCoupon");

  const handleChangeStep = (value: number) => {
    const currentStep = getValues("step");

    if (currentStep + value > totalStep) return;

    setValue("step", currentStep + value);
  };

  useEffect(() => {
    if (step === 1) {
      email?.length > 0 ? setDisabled(false) : setDisabled(true);
    }

    if (step === 2) {
      password?.length > 0 && passwordRepeat?.length > 0
        ? setDisabled(false)
        : setDisabled(true);
    }

    step === 3 && setDisabled(false);
  }, [email, password, passwordRepeat, step]);

  return (
    <div
      className={twMerge(
        "border-t border-graybg flex items-center p-8",
        step === 1 ? "justify-end" : "justify-between"
      )}
    >
      {step > 1 && (
        <Button.Root
          onClick={() => handleChangeStep(-1)}
          disabled={step === 1}
          className="bg-graybg text-primary stroke-primary"
        >
          <Button.ArrowLeftIcon />
          Voltar
        </Button.Root>
      )}

      <div className="flex items-center space-x-8">
        <span>{`Etapa ${step} de ${totalStep}`}</span>

        <Button.Root onClick={() => handleChangeStep(+1)} disabled={disabled}>
          {step === totalStep ? "Finalizar" : "Avançar"}
          <Button.ArrowRightIcon />
        </Button.Root>
      </div>
    </div>
  );
};

export interface RegisterFormMethods {
  step: number;
  total: number;
  email: string;
  password: string;
  passwordRepeat: string;
  indicateCoupon: string;
}
