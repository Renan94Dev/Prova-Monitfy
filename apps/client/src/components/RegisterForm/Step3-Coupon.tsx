"use client";

import { useId } from "react";
import { Input } from "@/components/ui/Input";
import { useFormContext } from "react-hook-form";
import { RegisterFormMethods } from "@/app/cadastro/page";

export const Step3 = () => {
  const htmlForCouponFieldID = useId();

  const { register } = useFormContext<RegisterFormMethods>();

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm text-purple">Código de indicação</p>

        <div className="space-y-2">
          <h2>Chegou aqui por indicação?</h2>
          <p className="font-light">
            Insira o código de indicação no campo abaixo.
          </p>
        </div>
      </div>

      <fieldset>
        <label htmlFor={htmlForCouponFieldID}>Código de indicação</label>
        <Input.Root>
          <Input.Field
            {...register("indicateCoupon")}
            id={htmlForCouponFieldID}
            placeholder="0000-0000-0000-0000"
            error={false}
            className="[&]:placeholder:text-tplaceholder [&]:focus:placeholder:text-transparent"
          />
        </Input.Root>
        <p className="text-xs text-primary font-light">
          Esta etapa não é obrigatória.
        </p>
      </fieldset>
    </div>
  );
};
