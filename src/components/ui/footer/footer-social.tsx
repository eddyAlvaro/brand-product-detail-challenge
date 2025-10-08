import type { SocialLink } from "@/constants/footer-links";
import { SectionTitle } from "@/components/ui/section-title";
import { FooterTextLink } from "@/components/ui/footer/footer-text-link";

type Props = {
  parentId: string;
  title: string;
  items: Readonly<SocialLink[]>;
};

export function FooterSocial({ parentId, title, items }: Props) {
  const socialTitleId = `footer-${parentId}-social-title`;
  return (
    <section className="mt-4" aria-labelledby={socialTitleId}>
      <SectionTitle
        as="h3"
        align="left"
        underlineWidthClass="w-full"
        className="text-[16px]"
      >
        <span id={socialTitleId}>{title}</span>
      </SectionTitle>

      <div className="mt-1 flex items-center gap-3">
        {items.map((s) => {
          const Icon = s.icon;
          return (
            <FooterTextLink
              key={`${parentId}-${s.label}`}
              href={s.href}
              external={s.external}
              className="text-foreground"
            >
              <span className="sr-only">{s.srLabel ?? s.label}</span>
              {Icon ? <Icon /> : <span>{s.label}</span>}
            </FooterTextLink>
          );
        })}
      </div>
    </section>
  );
}
