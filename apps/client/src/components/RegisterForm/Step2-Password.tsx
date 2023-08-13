"use client";

import { useId } from "react";
import { Input } from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";
import { RegisterFormMethods } from "@/app/cadastro/page";
import { BoxInfoPassword } from "@/components/BoxInfoPassword";
import { useSearchParams } from "next/navigation";
import { ErrorBox } from "../ErrorBox/ErrorBox";

export const Step2 = () => {
  const htmlForPasswordFieldID = useId();
  const htmlForPasswordRepeatFieldID = useId();

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const { register } = useFormContext<RegisterFormMethods>();

  const { ref: refPassword, ...restPasswordProps } = register("password", {
    required: true,
  });
  const { ref: refPasswordRepeat, ...restPasswordPropsRepeat } = register(
    "passwordRepeat",
    { required: true }
  );

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm text-purple">Senha</p>

        <div className="space-y-2">
          <h2>Agora, crie uma senha</h2>
          <p className="font-light">
            Crie uma senha forte e garanta segurança para sua conta.
          </p>
        </div>
      </div>

      <fieldset>
        <label htmlFor={htmlForPasswordFieldID}>Digite a senha</label>
        <Input.Root
          render={({ ref, changeType }) => (
            <>
              <Input.Field
                {...restPasswordProps}
                ref={(elementRef) => {
                  refPassword(elementRef);
                  ref.current.ref = elementRef;
                }}
                type="password"
                id={htmlForPasswordFieldID}
                error={error === ""}
                className="[&]:placeholder:text-tplaceholder [&]:focus:placeholder:text-transparent"
              />
              <Input.EyeButton changeType={changeType} />
            </>
          )}
        />
      </fieldset>

      <fieldset>
        <label htmlFor={htmlForPasswordRepeatFieldID}>Repita a senha</label>
        <Input.Root
          render={({ ref, changeType }) => (
            <>
              <Input.Field
                {...restPasswordPropsRepeat}
                ref={(elementRef) => {
                  refPasswordRepeat(elementRef);
                  ref.current.ref = elementRef;
                }}
                type="password"
                id={htmlForPasswordRepeatFieldID}
                error={error === ""}
                className="[&]:placeholder:text-tplaceholder [&]:focus:placeholder:text-transparent"
              />
              <Input.EyeButton changeType={changeType} />
            </>
          )}
        />
      </fieldset>

      {error === "" && (
        <ErrorBox message="A senha escolhida não preenche os requisitos mínimos." />
      )}

      <BoxInfoPassword />
    </div>
  );
};
