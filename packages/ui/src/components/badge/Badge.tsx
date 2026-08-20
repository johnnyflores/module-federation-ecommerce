import type { ReactNode } from "react";
import "./Badge.scss";

export type BadgeProps = {
  content?: ReactNode;
  children: ReactNode;
};

export function Badge({ content, children }: BadgeProps) {
  return (
    <span className="badge">
      {children}
      {content !== undefined && content !== null && (
        <span className="badge__content" aria-hidden="true">
          {content}
        </span>
      )}
    </span>
  );
}
