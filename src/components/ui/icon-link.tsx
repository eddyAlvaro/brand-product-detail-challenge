import { memo, type MouseEventHandler } from "react";
import { cn } from "../../utils/cn";
import { Anchor } from "./anchor";

type IconLinkProps = {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  textClasses?: string;
};

const ICON_LINK_BASE = `
  flex items-center gap-3 rounded-[5px] px-3 py-2 bg-white/0 text-center justify-center
  after:pointer-events-none after:content-[''] after:absolute after:hidden after:md:block
  after:left-1/2 after:-translate-x-1/2 after:-bottom-[-6px]
  after:h-[2px] after:w-full after:bg-black
  after:origin-center after:scale-x-0 after:transition-transform after:duration-300
  hover:after:scale-x-100 hover:text-neutral-dark
  aria-[current=page]:after:scale-x-100
  aria-[current=page]:font-extrabold
`;

const IconLink = memo(function IconLink({
  href,
  label,
  Icon,
  onClick,
  textClasses,
}: IconLinkProps) {
  return (
    <Anchor href={href} onClick={onClick} className={ICON_LINK_BASE}>
      <Icon className="w-[22px] h-[16px]" />
      <span className={cn("normal-case font-semibold", textClasses)}>
        {label}
      </span>
    </Anchor>
  );
});

export default IconLink;
