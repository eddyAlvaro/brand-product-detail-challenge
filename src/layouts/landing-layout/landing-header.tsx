import { useState } from "react";
import PromoBar from "./promo-bar";
import MobileToggle from "./mobile-toggle";
import NavLinks from "./nav-links";
import { NAV_LINKS } from "../../constants/nav-links";

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-primary text-white">
      <PromoBar />
      <nav className="relative sm:flex sm:flex-col mx-auto flex max-w-7xl items-center justify-between px-4 py-1">
        <a href="/" className="uppercase text-[40px] font-bold">
          Brand
        </a>
        <MobileToggle
          isOpen={isOpen}
          controlsId="primary-nav"
          onToggle={() => setIsOpen(!isOpen)}
        />
        <NavLinks
          links={NAV_LINKS}
          isOpen={isOpen}
          id="primary-nav"
          onItemClick={() => setIsOpen(false)}
        />
      </nav>
    </header>
  );
};

export default LandingHeader;
