import { Link as MLink } from "@mui/material";

import { FooterColumn } from "@/components/ui/footer/footer-column";
import { FooterSocial } from "@/components/ui/footer/footer-social";
import { FOOTER_COLUMNS } from "@/constants/footer-links";

function FooterTextLink({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <MLink
      href={href}
      underline="none"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 py-1 text-[14px] text-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded ${className}`}
    >
      {children}
    </MLink>
  );
}

export const LandingFooter = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-[1440px] px-[24px] sm:px-[38px] py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-8">
          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn
              key={col.id}
              id={col.id}
              title={col.title}
              links={col.links}
              showLocationIcon={col.showLocationIcon}
            >
              {col.social && (
                <FooterSocial parentId={col.id} title={col.social.title} items={col.social.items} />
              )}
            </FooterColumn>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between text-[13px] text-foreground">
          <FooterTextLink href="/legal/terminos">Términos y condiciones</FooterTextLink>
          <span>Brand © {new Date().getFullYear()} — Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
};
