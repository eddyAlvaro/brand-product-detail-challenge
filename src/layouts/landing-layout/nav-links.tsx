import { memo } from "react";
import { DeliverySecondIcon } from "../../components/icons/delivery-second-icon";
import { ShopIcon } from "../../components/icons/shop-icon";
import type { NavLink } from "../../constants/nav-links";
import IconLink from "../../components/ui/icon-link";
import { UnderlineNavItem } from "../../components/ui/underline-nav-item";
import { Anchor } from "../../components/ui/anchor";

type Props = {
  links: NavLink[];
  isOpen: boolean;
  id: string;
  onItemClick?: () => void;
};

const UL_CLASSES = `
  absolute left-0 right-0 top-full z-[100] md:static
  bg-brand-primary/98 md:bg-transparent
  backdrop-blur md:backdrop-blur-0
  shadow-lg shadow-black/10 ring-1 ring-white/10 md:shadow-none md:ring-0
  max-h-0 opacity-0 -translate-y-2 overflow-y-hidden
  transition-[max-height,opacity,transform] duration-300 ease-out
  data-[open=true]:max-h-[calc(100dvh-var(--header-h))]
  data-[open=true]:overflow-y-auto
  data-[open=true]:opacity-100
  data-[open=true]:translate-y-0
  overscroll-contain
  md:max-h-none md:opacity-100 md:translate-y-0 md:transition-none md:overflow-visible
  flex flex-col md:flex-row md:items-center
  gap-4 md:gap-[0px_32px] md:flex-wrap md:justify-center
  px-6 py-4 md:p-0
  uppercase font-medium text-[18px] md:text-[15px]
  motion-reduce:transition-none motion-reduce:duration-0
`;
const NavLinks = memo(function NavLinks({
  links,
  isOpen,
  id,
  onItemClick,
}: Props) {
  return (
    <ul
      id={id}
      role="menu"
      data-open={isOpen}
      aria-hidden={!isOpen ? true : undefined}
      className={UL_CLASSES}
    >
      {links.map((nav) => (
        <UnderlineNavItem
          key={`${nav.href}-${nav.label}`}
          href={nav.href}
          label={nav.label}
          onClick={onItemClick}
        />
      ))}

      <li className="md:hidden my-2 h-px bg-white/15" aria-hidden />

      <li className="md:hidden grid gap-3">
        <IconLink
          href="/tracking"
          onClick={onItemClick}
          Icon={DeliverySecondIcon}
          label="Seguimiento"
        />
        <IconLink
          href="/help"
          onClick={onItemClick}
          Icon={ShopIcon}
          label="Tiendas"
          textClasses="text-white hover:text-neutral-dark"
        />
      </li>

      <li className="md:hidden grid gap-3 pb-[env(safe-area-inset-bottom)]">
        <Anchor
          href="/login"
          onClick={onItemClick}
          className="w-full inline-flex justify-center items-center rounded-[5px] py-3 text-center font-semibold text-foreground bg-white hover:bg-brand-accent/80 hover:text-white active:opacity-100"
        >
          Iniciar Sesión
        </Anchor>
        <Anchor
          href="/register"
          onClick={onItemClick}
          className="w-full inline-flex justify-center items-center rounded-[5px] py-3 text-center font-semibold bg-brand-accent hover:bg-white/80 hover:text-foreground"
        >
          Registrarme
        </Anchor>
      </li>
    </ul>
  );
});

export default NavLinks;
