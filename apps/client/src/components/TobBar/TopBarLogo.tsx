import Image from "next/image";

export const TopBarLogo = () => {
  return (
    <div className="flex items-center justify-center h-11 w-11 bg-secondary rounded-lg">
      <Image
        src="/logoIcon.svg"
        alt="logo"
        width={28}
        height={18}
        priority={true}
      />
    </div>
  );
};
