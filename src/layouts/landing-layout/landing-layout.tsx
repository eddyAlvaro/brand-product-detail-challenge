import React from "react";
import LandingHeader from "./landing-header";
import { NewsletterCta } from "../../components/ui/newsletter-cta";
import { LandingFooter } from "./landing-footer";

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
