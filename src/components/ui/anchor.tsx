import { type MouseEventHandler, type PropsWithChildren, memo } from "react";

type AnchorProps = PropsWithChildren<{
  href: string;
  className?: string;
  ariaCurrent?: "page";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}>;

export const Anchor = memo(function Anchor({
  href,
  className,
  ariaCurrent,
  onClick,
  children,
}: AnchorProps) {
  return (
    <a href={href} className={className} onClick={onClick} aria-current={ariaCurrent}>
      {children}
    </a>
  );
});
