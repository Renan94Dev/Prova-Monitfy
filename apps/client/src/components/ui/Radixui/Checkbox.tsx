import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check as CheckIcon } from "lucide-react";

export const Checkbox = () => (
  <div className="flex items-center gap-x-3 cursor-pointer select-none">
    <CheckboxRadix.Root
      className="flex  h-4 w-4 data-[state=checked]:bg-secondary  appearance-none items-center justify-center rounded-[4px] border data-[state=unchecked]:border-borders data-[state=checked]:border-secondary bg-white"
      defaultChecked
      id="c1"
    >
      <CheckboxRadix.Indicator className="text-violet11">
        <CheckIcon size={10} />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
    <label htmlFor="c1" className="cursor-pointer">
      Me mantenha conectado
    </label>
  </div>
);
