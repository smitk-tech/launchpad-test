import * as React from "react";
import switchOffUrl from "@/assets/Switch.svg";
import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        ref={ref}
        className={cn(
          "relative inline-flex h-[18px] w-[33px] shrink-0 cursor-pointer items-center justify-start overflow-hidden rounded-full border-0 p-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        onClick={() => onCheckedChange?.(!checked)}
        {...props}
      >
        {checked ? (
          <span className="absolute inset-0 bg-primary" aria-hidden />
        ) : (
          <img
            src={switchOffUrl}
            alt=""
            className="absolute inset-0 size-full object-cover"
            width={33}
            height={18}
          />
        )}
        <span
          className={cn(
            "relative z-[1] block size-4 rounded-full bg-card shadow-sm transition-transform",
            checked ? "translate-x-[15px]" : "translate-x-0.5",
          )}
          style={{ marginTop: "1px" }}
        />
      </button>
    );
  },
);
Switch.displayName = "Switch";

export { Switch };
