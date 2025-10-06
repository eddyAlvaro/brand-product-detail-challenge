import React from "react";
import LandingHeader from "./landing-header";
import LandingFooter from "./landing-footer";

interface LayoutProps {
  children: React.ReactNode;
}
function LandingLayout({ children }: LayoutProps) {
  return (
    <>
      <LandingHeader />
      <main>{children}</main>
      <LandingFooter />
    </>
  );
}

export default LandingLayout;
