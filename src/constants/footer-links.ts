import { InstagramIcon } from "@/components/icons/Instagram-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { MessageIcon } from "@/components/icons/message-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type SocialLink = FooterLink & { srLabel?: string };

export type FooterColumn = {
  id: string;
  title: string;
  links: FooterLink[];
  showLocationIcon?: boolean;
  social?: {
    id: string;
    title: string;
    items: SocialLink[];
  };
};

export const FOOTER_COLUMNS: Readonly<FooterColumn[]> = [
  {
    id: "pickup",
    title: "Puntos de Retiro",
    showLocationIcon: true,
    links: [
      { label: "Tienda Brand Santiago", href: "/tiendas/santiago" },
      { label: "Tienda Brand Viña del Mar", href: "/tiendas/vina" },
    ],
  },
  {
    id: "support",
    title: "Servicio al Cliente",
    links: [
      { label: "Seguimiento de pedidos", href: "/ayuda/seguimiento" },
      { label: "Cotización", href: "/ayuda/cotizacion" },
      { label: "Centro de ayuda", href: "/ayuda" },
      { label: "Preguntas frecuentes", href: "/ayuda/faq" },
      { label: "Cambios y devoluciones", href: "/ayuda/devoluciones" },
      { label: "Información de reservas", href: "/ayuda/reservas" },
      { label: "Información de despachos", href: "/ayuda/despachos" },
    ],
  },
  {
    id: "account",
    title: "Mi cuenta",
    links: [
      { label: "Ingresa o regístrate", href: "/cuenta/ingresar" },
      { label: "Pedidos", href: "/cuenta/pedidos" },
      { label: "Descargas", href: "/cuenta/descargas" },
      { label: "Direcciones", href: "/cuenta/direcciones" },
    ],
  },
  {
    id: "about",
    title: "Sobre Nosotros",
    links: [
      { label: "Quiénes somos", href: "/sobre/quienes-somos" },
      { label: "Tiendas", href: "/tiendas" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    id: "contact",
    title: "Contáctanos",
    links: [
      {
        label: "+56 9 9999 9999",
        href: "tel:+56999999999",
        icon: WhatsAppIcon,
      }, // tel no es externo
      { label: "¿Necesitas Ayuda?", href: "/ayuda", icon: MessageIcon },
      { label: "Lunes a viernes 08:30 - 18:30", href: "/contacto#horarios" },
      { label: "Sábado de 10:00 - 14:00", href: "/contacto#horarios" },
      { label: "Domingo de 13:30 - 14:00", href: "/contacto#horarios" },
    ],
    social: {
      id: "social",
      title: "Síguenos en redes sociales",
      items: [
        {
          label: "Facebook",
          srLabel: "Facebook de Brand",
          href: "https://facebook.com/brand",
          external: true,
          icon: FacebookIcon,
        },
        {
          label: "Whatsapp",
          srLabel: "Whatsapp de Brand",
          href: "https://whatsapp.com/brand",
          external: true,
          icon: WhatsAppIcon,
        },
        {
          label: "Instagram",
          srLabel: "Instagram de Brand",
          href: "https://instagram.com/brand",
          external: true,
          icon: InstagramIcon,
        },
      ],
    },
  },
] as const;
