import { Bell } from "lucide-react";

export const NotificationIcon = () => {
  return (
    <div className="relative">
      <Bell size={28} className="stroke-cwhite" />
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full" />
    </div>
  );
};
