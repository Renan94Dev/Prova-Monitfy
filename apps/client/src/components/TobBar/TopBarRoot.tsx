import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TopBarRoot: React.FC<Props> = ({ children, className }) => {
  const baseStyle = twMerge(
    "flex items-center h-[76px] w-full bg-primary rounded-2xl p-4",
    className
  );

  return <div className={baseStyle}>{children}</div>;
};

type Props = HTMLAttributes<HTMLDivElement>;
