import type { NavLink } from "../../../constants/nav-links";

type Props = {
  links: NavLink[];
  isOpen: boolean;
  id: string;
  onItemClick?: () => void;
};
const NavLinks = ({ links, isOpen, id, onItemClick }: Props) => {
  return (
    <ul
      id={id}
      data-open={isOpen}
      className="
        absolute left-0 right-0 top-full z-50 sm:static
        bg-brand-primary/98 sm:bg-transparent
        backdrop-blur sm:backdrop-blur-0
        shadow-lg shadow-black/10 ring-1 ring-white/10 sm:shadow-none sm:ring-0
        overflow-hidden max-h-0 opacity-0 -translate-y-2
        transition-[max-height,opacity,transform] duration-300 ease-out
        data-[open=true]:max-h-96 data-[open=true]:opacity-100 data-[open=true]:translate-y-0
        sm:max-h-none sm:opacity-100 sm:translate-y-0 sm:transition-none
        flex flex-col sm:flex-row sm:items-center
        gap-4 sm:gap-[32px]
        px-6 py-4 sm:p-0
        uppercase font-medium text-[18px] sm:text-[15px]
        motion-reduce:transition-none motion-reduce:duration-0
      "
      aria-hidden={!isOpen ? true : undefined}
    >
      {links.map((nav) => (
        <li key={nav.label}>
          <a
            className="block py-1 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded text-center"
            href={nav.href}
            onClick={onItemClick}
          >
            {nav.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
