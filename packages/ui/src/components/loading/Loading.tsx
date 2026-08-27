import type { HTMLAttributes } from "react";
import { cn } from "../../utils";
import "./Loading.scss";

type LoadingSize = "small" | "medium" | "large";

export type LoadingProps = HTMLAttributes<HTMLDivElement> & {
  size?: LoadingSize;
  label?: string;
  fullscreen?: boolean;
};

export function Loading({
  size = "medium",
  label,
  className,
  fullscreen = false,
  ...props
}: LoadingProps) {
  return (
    <div
      className={cn(
        "ui-loading",
        `ui-loading--${size}`,
        fullscreen && "ui-loading--fullscreen",
        className,
      )}
      role="status"
      aria-label={label ?? "Loading"}
      {...props}
    >
      <span className="ui-loading__spinner" aria-hidden="true" />
      {label && <span className="ui-loading__label">{label}</span>}
    </div>
  );
}
