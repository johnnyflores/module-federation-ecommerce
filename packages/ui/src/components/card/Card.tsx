import * as React from "react";
import "./Card.scss";

export function Card({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card ${className}`} {...props} />;
}

export function CardHeader({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__header ${className}`} {...props} />;
}

export function CardTitle({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__title ${className}`} {...props} />;
}

export function CardDescription({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__description ${className}`} {...props} />;
}

export function CardImage({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__image ${className}`} {...props} />;
}

export function CardAction({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__action ${className}`} {...props} />;
}

export function CardContent({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__content ${className}`} {...props} />;
}

export function CardFooter({
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`card__footer ${className}`} {...props} />;
}
