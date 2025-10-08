import { memo, type MouseEventHandler } from "react";
import { Anchor } from "@/components/ui/anchor";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const UNDERLINE_LINK_CLASSES = `
  relative block py-1 text-white
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 rounded text-center
  hover:opacity-100
  after:pointer-events-none after:content-[''] after:absolute after:hidden after:md:block
  after:left-1/2 after:-translate-x-1/2 after:-bottom-[-6px]
  after:h-[2px] after:w-full after:bg-black
  after:origin-center after:scale-x-0 after:transition-transform after:duration-300
  hover:after:scale-x-100 hover:text-neutral-dark
  aria-[current=page]:after:scale-x-100
  aria-[current=page]:font-extrabold
`;

export const UnderlineNavItem = memo(function UnderlineNavItem({
  href,
  label,
  isActive,
  onClick,
}: Props) {
  return (
    <li>
      <Anchor
        href={href}
        onClick={onClick}
        ariaCurrent={isActive ? "page" : undefined}
        className={UNDERLINE_LINK_CLASSES}
      >
        {label}
      </Anchor>
    </li>
  );
});
