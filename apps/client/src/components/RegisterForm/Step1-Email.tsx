"use client";

import { useId } from "react";
import { Input } from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";
import { RegisterFormMethods } from "@/app/cadastro/page";

export const Step1 = () => {
  const htmlForEmailFieldID = useId();

  const { register } = useFormContext<RegisterFormMethods>();

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm text-purple">E-mail</p>

        <div className="space-y-2">
          <h2>Primeiro, informe seu e-mail</h2>
          <p className="font-light">
            Você usará o e-mail para efetuar o seu login.
          </p>
        </div>
      </div>

      <fieldset>
        <label htmlFor={htmlForEmailFieldID}>Seu e-mail</label>
        <Input.Root>
          <Input.Field
            {...register("email", { required: true })}
            id={htmlForEmailFieldID}
            placeholder="exemplo@email.com.br"
            error={false}
            className="[&]:placeholder:text-tplaceholder [&]:focus:placeholder:text-transparent"
          />
        </Input.Root>
      </fieldset>
    </div>
  );
};
