import type { ButtonHTMLAttributes, Ref } from "react";
import { Slot } from "radix-ui";
import { cn } from "../../utils";
import "./Button.scss";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "link";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
  ref?: Ref<HTMLButtonElement>;
};

export function Button({
  variant = "primary",
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(`ui-button ui-button--${variant}`, className)}
      {...props}
    />
  );
}
