import type { ReactNode } from "react";
import { cn } from "../../utils";
import "./Badge.scss";

export type BadgeProps = {
  content?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Badge({ content, children, className }: BadgeProps) {
  return (
    <span className={cn("ui-badge", className)}>
      {children}
      {content !== undefined && content !== null && (
        <span className="ui-badge__content" aria-hidden="true">
          {content}
        </span>
      )}
    </span>
  );
}
