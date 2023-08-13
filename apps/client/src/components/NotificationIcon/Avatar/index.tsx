import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      width={44}
      height={44}
      priority={true}
    />
  );
};
