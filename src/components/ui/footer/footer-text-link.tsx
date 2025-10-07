import { Link as MLink } from "@mui/material";

type Props = {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

const LINK_BASE =
  "inline-flex items-center gap-2 py-1 text-[14px] text-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded";

export const FooterTextLink = ({
  href,
  external,
  className = "",
  children,
}: Props) => {
  return (
    <MLink
      href={href}
      underline="none"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${LINK_BASE} ${className}`}
    >
      {children}
    </MLink>
  );
};
