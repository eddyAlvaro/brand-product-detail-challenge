import { useState } from "react";

import { NAV_LINKS } from "@/constants/nav-links";
import MobileToggle from "@/layouts/landing-layout/mobile-toggle";
import NavLinks from "@/layouts/landing-layout/nav-links";
import SearchCartRow from "@/layouts/landing-layout/search-cart-row";
import { TopBar } from "@/layouts/landing-layout/top-bar";

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-brand-primary text-white">
      <TopBar />

      <div className="relative w-full flex md:flex-col items-center text-center justify-between px-4 sm:px-[38px] max-w-[1440px] mx-auto">
        <a href="/" className="uppercase text-[40px] font-bold">
          Brand
        </a>
        <div className="md:w-full grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center">
          <div className="justify-self-start sm:justify-self-end">
            <MobileToggle
              isOpen={isOpen}
              controlsId="primary-nav"
              onToggle={() => setIsOpen(!isOpen)}
            />
          </div>
          <nav className="md:flex md:flex-col mx-auto flex max-w-7xl items-center justify-between md:px-4">
            <NavLinks
              links={NAV_LINKS}
              isOpen={isOpen}
              id="primary-nav"
              onItemClick={() => setIsOpen(false)}
            />
          </nav>
          <div className="justify-self-end">
            <SearchCartRow />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
