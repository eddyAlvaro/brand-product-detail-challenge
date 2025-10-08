import { LocationIcon } from "@/components/icons/location-icon";
import { FooterTextLink } from "@/components/ui/footer/footer-text-link";
import { SectionTitle } from "@/components/ui/section-title";
import type { FooterLink } from "@/constants/footer-links";

type Props = {
  id: string;
  title: string;
  links: Readonly<FooterLink[]>;
  showLocationIcon?: boolean;
  children?: React.ReactNode;
};

export function FooterColumn({ id, title, links, showLocationIcon, children }: Props) {
  const titleId = `footer-${id}-title`;

  return (
    <nav aria-labelledby={titleId} className="">
      <SectionTitle as="h3" align="left" underlineWidthClass="w-full" className="text-[16px]">
        <span id={titleId}>{title}</span>
      </SectionTitle>

      <ul className="mt-1 space-y-1">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <li key={`${id}-${l.label}`}>
              <FooterTextLink href={l.href} external={l.external}>
                {Icon && <Icon className="w-[22px] h-[22px]" />}
                {showLocationIcon && (
                  <LocationIcon className="text-brand-primary w-[22px] h-[22px]" />
                )}
                {l.label}
              </FooterTextLink>
            </li>
          );
        })}
      </ul>

      {children}
    </nav>
  );
}
