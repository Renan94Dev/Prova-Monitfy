import { twMerge } from "tailwind-merge";

export const Box: React.FC<Props> = ({ className, ...rest }) => {
  const baseClassName = twMerge("bg-cwhite shadow-lg", className);

  return <div className={baseClassName} {...rest} />;
};

type Props = React.HTMLAttributes<HTMLDivElement>;
