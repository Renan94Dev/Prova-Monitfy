import Image from "next/image";

export const LoginFormLogo = () => {
  return (
    <div className="p-12">
      <Image
        src="/logo.svg"
        alt="logo"
        width={164}
        height={27}
        priority={true}
      />
    </div>
  );
};
