import { Breadcrumbs, Link, Typography } from "@mui/material";

type Props = {
  items: { label: string; href?: string }[];
};

export const ProductBreadcrumbs = ({ items }: Props) => (
  <Breadcrumbs
    className="uppercase text-foreground font-[400] text-[12px] sm:text-[16px]"
    aria-label="breadcrumb"
  >
    {items.map(({ label, href }, index) =>
      href ? (
        <Link key={index} underline="hover" color="inherit" href={href}>
          {label}
        </Link>
      ) : (
        <Typography key={index}>{label}</Typography>
      )
    )}
  </Breadcrumbs>
);
