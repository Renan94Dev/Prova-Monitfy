import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const InputChangeTypeButton: React.FC<Props> = ({ changeType }) => {
  const [showing, setShowing] = useState(false);

  const onChangeType = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    changeType();
    setShowing((prev) => !prev);
  };

  const iconSize = 20;
  const classBase = twMerge("stroke-primary");

  return (
    <button
      className="absolute right-6 top-1/2 -translate-y-1/2"
      onClick={onChangeType}
    >
      {showing ? (
        <EyeOff size={iconSize} className={classBase} />
      ) : (
        <Eye size={20} className="stroke-primary" />
      )}
    </button>
  );
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  changeType: () => void;
}
