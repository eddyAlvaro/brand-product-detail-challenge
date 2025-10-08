// components/header/top-bar.tsx
import { DeliverySecondIcon, ShopIcon, UserIcon } from "@/components/icons";

const items = [
  { href: "/login", label: "Iniciar sesión", Icon: UserIcon },
  { href: "/tracking", label: "Seguimiento", Icon: DeliverySecondIcon },
  { href: "/tiendas", label: "Tiendas", Icon: ShopIcon },
];

export const TopBar = () => {
  return (
    <div className="bg-neutral-dark text-white">
      <div className="mx-auto max-w-[1440px] grid grid-cols-[1fr_auto_1fr] items-center px-4 py-2">
        <div aria-hidden />
        <p className="justify-self-center text-center text-[14px] sm:text-[15px]">
          15% OFF EN TODO CON EL CÓDIGO: XXXOFF
        </p>
        <nav
          aria-label="Accesos rápidos"
          className="hidden md:flex justify-self-end items-center gap-2 text-[10px] min-[1035px]:text-[15px]"
        >
          {items.map(({ href, label, Icon }, i) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center  gap-2 opacity-90 hover:opacity-100"
            >
              <Icon className="h-4 w-4" />
              <span className="hidden min-[850px]:block">{label}</span>
              {i < items.length - 1 && <span className="h-4 w-px bg-white/30" aria-hidden />}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
