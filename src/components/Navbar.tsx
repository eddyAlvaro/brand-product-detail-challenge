import { useState } from "react";
import { Icons } from "./icons/Icons";
type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-brand-primary text-white">
        <nav className="flex flex-col justify-between items-center">
          <a href="/" className="uppercase text-2xl font-bold">
            Brand
          </a>
          <Icons.menuBurger onClick={() => setIsOpen(!isOpen)} />
          {isOpen && (
            <ul className="flex flex-col uppercase font-[500] gap-[24px] text-[15px]">
              <li>
                <a href="#">Shop All</a>
              </li>
              <li>
                <a href="#">Best Seller</a>
              </li>
              <li>
                <a href="#">Proteínas</a>
              </li>
              <li>
                <a href="#">Suplementos</a>
              </li>
              <li>
                <a href="#">Pre entrenos</a>
              </li>
              <li>
                <a href="#">Accesorios</a>
              </li>
              <li>
                <a href="#">Barras y Snack</a>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
