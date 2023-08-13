import { CheckIcon, XIcon } from "lucide-react";
import { Toast, toast } from "react-hot-toast";

export const ToastNotification = ({ toastRef }: Props) => {
  const handleClose = () => toast.dismiss(toastRef.id);

  return (
    <div className="flex items-center gap-4 py-3 px-6 text-tplaceholder bg-toastbg rounded-lg text-sm">
      <Check />
      Link copiado com sucesso
      <button onClick={handleClose} className="ml-10">
        <XIcon size={14} strokeWidth={2} />
      </button>
    </div>
  );
};

const Check = () => {
  return (
    <div className="w-4 h-4 bg-secondary flex items-center justify-center rounded-full">
      <CheckIcon size={12} strokeWidth={2} />
    </div>
  );
};

interface Props {
  toastRef: Toast;
}
