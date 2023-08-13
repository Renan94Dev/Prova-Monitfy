"use client";

import { useRef } from "react";

export const InputRoot = <T,>({ children, render }: Props<T>) => {
  const inputRefType = useRef<{ ref: HTMLInputElement | null }>({ ref: null });

  const changeType = () => {
    if (inputRefType.current?.ref && inputRefType.current.ref.type) {
      inputRefType.current.ref.type =
        inputRefType.current.ref.type === "password" ? "text" : "password";
    }
  };

  return (
    <div className="w-full relative">
      {render ? render({ ref: inputRefType, changeType }) : children}
    </div>
  );
};

interface Props<T> extends React.HTMLAttributes<HTMLDivElement> {
  render?: (props: {
    ref: React.MutableRefObject<{ ref: HTMLInputElement | null }>;
    changeType: () => void;
  }) => React.ReactNode;
}
