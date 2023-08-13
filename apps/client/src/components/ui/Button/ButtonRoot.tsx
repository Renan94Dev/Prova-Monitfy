import React from "react";
import { twMerge } from "tailwind-merge";

export const ButtonRoot: React.FC<Props> = ({
  children,
  className,
  disabled,
  ...rest
}) => {
  const childCount = React.Children.count(children);

  const baseStyle = twMerge(
    "flex items-center bg-primary rounded-lg px-5 py-4 text-white",
    className
  );

  const justifyCenterStyle = twMerge(baseStyle, "justify-center");
  const justifyBetweenStyle = twMerge(baseStyle, "justify-between gap-x-2");

  const disabledStyle =
    "disabled:cursor-not-allowed disabled:bg-graybg disabled:text-buttontext";

  return (
    <button
      className={
        childCount > 1
          ? disabled
            ? twMerge(justifyBetweenStyle, disabledStyle)
            : justifyBetweenStyle
          : disabled
          ? twMerge(justifyCenterStyle, disabledStyle)
          : justifyCenterStyle
      }
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
