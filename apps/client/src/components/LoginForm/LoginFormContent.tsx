"use client";

import { useId, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Radixui/Checkbox";
import { Button } from "../ui/Button";
import { ErrorBox } from "../ErrorBox/ErrorBox";
import { useForm } from "react-hook-form";

export const LoginFormContent: React.FC<Props> = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const htmlForEmailFieldID = useId();
  const htmlForPasswordFieldID = useId();

  const { register, handleSubmit, watch } = useForm<Form>();

  const emailWatch = watch("email");
  const passwordWatch = watch("password");

  const emailProps = register("email");
  const { ref: refPassword, ...restPasswordProps } = register("password");

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      className="w-full space-y-6 flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-center">Entrar na sua conta</h2>

      <div className="space-y-4">
        <fieldset>
          <label htmlFor={htmlForEmailFieldID}>E-mail</label>
          <Input.Root>
            <Input.Field
              {...emailProps}
              id={htmlForEmailFieldID}
              placeholder="Digite seu e-mail"
              error={error === ""}
            />
          </Input.Root>
        </fieldset>

        <fieldset>
          <div className="flex items-center justify-between">
            <label htmlFor={htmlForPasswordFieldID}>Senha</label>
            <button className="text-sm text-purple">Esqueci minha senha</button>
          </div>

          <Input.Root
            render={({ ref, changeType }) => (
              <>
                <Input.Field
                  ref={(elementRef) => {
                    refPassword(elementRef);
                    ref.current.ref = elementRef;
                  }}
                  {...restPasswordProps}
                  type="password"
                  id={htmlForPasswordFieldID}
                  placeholder="Digite seu senha"
                  error={error === ""}
                />
                <Input.EyeButton changeType={changeType} />
              </>
            )}
          />
        </fieldset>

        {error === "" && <ErrorBox message="Usuário ou senha incorretos" />}

        <Checkbox />
      </div>

      <Button.Root disabled={error === "" || !emailWatch || !passwordWatch}>
        Entrar
        <Button.ArrowRightIcon />
      </Button.Root>
    </form>
  );
};

type Props = React.HTMLAttributes<HTMLFormElement>;

interface Form {
  email: string;
  password: string;
}
