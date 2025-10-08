import React from "react";
import { NewsletterCta } from "@/components/ui/newsletter-cta";
import { LandingFooter } from "@/layouts/landing-layout/landing-footer";
import LandingHeader from "@/layouts/landing-layout/landing-header";

interface LayoutProps {
  children: React.ReactNode;
}
function LandingLayout({ children }: LayoutProps) {
  return (
    <>
      <LandingHeader />
      <main>{children}</main>
      <NewsletterCta />
      <LandingFooter />
    </>
  );
}

export default LandingLayout;
