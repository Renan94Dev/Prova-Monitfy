import Image from "next/image";

export const ErrorBox: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex items-center w-full bg-red-200/30 h-11 rounded-lg px-3 gap-x-3">
      <Image
        src={"./iconError.svg"}
        alt="icone erro"
        width={16}
        height={16}
        priority={true}
      />

      <p className="text-xs">{message}</p>
    </div>
  );
};

interface Props {
  message: string;
}
