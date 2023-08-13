"use client";

import { FaqIcon } from "@/components/FaqIcon";
import { NotificationIcon } from "@/components/NotificationIcon";
import { Avatar } from "@/components/NotificationIcon/Avatar";
import { TobBar } from "@/components/TobBar";
import { Box } from "@/components/ui/Box";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Check } from "lucide-react";
import Image from "next/image";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";
import { ToastNotification } from "@/components/ToastNotification";

export default function GenerateLinkPage() {
  const formMethods = useForm<FormProps>();

  return (
    <>
      <Toaster position="top-center" />

      <main className="grid grid-cols-1 grid-rows-[min-content_1fr] items-stretch min-h-screen flex-col p-6 gap-4">
        <TobBar.TobBarRoot className="flex items-center justify-between">
          <TobBar.TobBarLogo />

          <div className="flex items-center gap-x-[26px]">
            <Button.Root className="bg-cwhite text-primary font-medium h-11">
              <Button.IconCopy />
              Copiar meu código
            </Button.Root>

            <FaqIcon />
            <NotificationIcon />
            <Avatar />
          </div>
        </TobBar.TobBarRoot>

        <Box className="w-full h-full grid grid-rows-[auto_1fr] grid-cols-12 gap-4 bg-transparent shadow-none">
          <Box className="col-span-4 row-start-1 rounded-2xl p-8 space-y-8">
            <Image
              src={"/linkIcon.svg"}
              alt="link icone"
              width={80}
              height={80}
              priority={true}
              className="w-[20%] 2xl:w-auto"
            />

            <div className="space-y-4">
              <h2 className="font-medium">Gerador de Link</h2>
              <p className="w-full 2xl:w-[65%] text-tplaceholder">
                Crie links personalizados que convertem e geram comissões para
                você.
              </p>
            </div>
          </Box>

          <Box className="col-span-4 row-start-2 row-span-1 rounded-2xl p-8 flex flex-col justify-between">
            <FormProvider {...formMethods}>
              {formMethods.formState.isSubmitSuccessful ? (
                <UrlFormSuccess />
              ) : (
                <UrlForm />
              )}
            </FormProvider>
          </Box>

          <Box className="col-start-5 col-end-[-1] row-span-full bg-secondary rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 mt-12">
              <Image
                src={"/person.svg"}
                alt="icone person"
                fill
                className="object-contain object-left-bottom w-full h-full block"
                priority={true}
              />
            </div>

            <div className="absolute right-0 bottom-6 w-[360px]">
              <p>
                Links personalizados{" "}
                <b>aumentam as suas chances e conversão em até 50%</b>, criando
                mais comissões para você.
              </p>

              <p>
                <b>Comece agora a criar e compartilhar seus links.</b>
              </p>
            </div>
          </Box>
        </Box>
      </main>
    </>
  );
}

const UrlForm = () => {
  const { register, handleSubmit, watch, formState, setValue } =
    useFormContext<FormProps>();

  const urlInputWatch = watch("url");

  const onSubmit = async (data: FormProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setValue("url", data.url);
  };

  return (
    <>
      <p className="text-primary w-full text-sm 2xl:text-base 2xl:w-[65%]">
        Vá até a página que deseja compartilhar, copie a URL e cole no campo
        abaixo para criar seu link personalizado:
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input.Root>
          <Input.Field
            {...register("url", { required: true })}
            type="url"
            error={false}
            placeholder="Cole a URL aqui.."
            className="[&]:placeholder:text-tplaceholder [&]:focus:placeholder:text-transparent"
            disabled={formState.isSubmitting}
          />
        </Input.Root>

        <Button.Root className="w-full" disabled={!urlInputWatch}>
          {formState.isSubmitting ? (
            <ReactLoading
              type={"spokes"}
              className="stroke-tplaceholder"
              height={20}
              width={20}
            />
          ) : (
            "Criar link personalizado"
          )}
        </Button.Root>
      </form>
    </>
  );
};

const UrlFormSuccess = () => {
  const { reset } = useFormContext<FormProps>();

  const handleCopyClipboard = () => {
    const url = "https://renan-portfolio-omega.vercel.app/";
    navigator?.clipboard?.writeText(url);
    toast.custom((t) => <ToastNotification toastRef={t} />, {
      duration: 13000,
      id: "copy",
    });
  };

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Check />
          <p className="font-medium">Link criado com sucesso!</p>
        </div>

        <p className="text-tplaceholder text-sm lg:w-[65%]">
          Muito bem. Agora você já pode compartilhar seu link personalizado onde
          quiser.
        </p>
      </div>

      <div className="flex flex-col w-full space-y-5">
        <Button.Root
          onClick={handleCopyClipboard}
          className="w-full font-medium text-cwhite"
        >
          Copiar link personalizado
          <Button.IconCopy />
        </Button.Root>

        <Button.Root
          className="bg-transparent text-primary w-full"
          onClick={() => reset()}
        >
          Criar novo link
        </Button.Root>
      </div>
    </>
  );
};

interface FormProps {
  url: string;
}
