import { useState } from "react";

type Props = {
  title?: string;
  subtitle?: string;
};

export const NewsletterCta = ({
  title = "Forma parte de Brand",
  subtitle = "Suscríbete a nuestras ofertas y novedades.",
}: Props) => {
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(false);

    //todo: validación simple
    try {
      setBusy(true);
      setOk(true);
    } catch {
      throw new Error("Error al enviar el correo");
    } finally {
      setBusy(false);
    }
  };
  return (
    <section
      className={`w-full bg-brand-primary text-white md:mt-6`}
      aria-label="Suscripción a newsletter"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-4 px-[24px] py-6 sm:flex-row sm:items-center sm:justify-between sm:px-[40px]">
        <div className="max-w-xl">
          <h2 className="text-[18px] font-extrabold leading-tight sm:text-[22px]">{title}</h2>
          <p className="text-[14px] sm:text-[15px]">{subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="relative w-full max-w-[820px] md:mr-8" noValidate>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="nombre@contacto.cl"
            aria-label="Correo electrónico"
            className="w-full rounded-full bg-white pl-7 py-3 pr-[160px]
              text-foreground placeholder:text-[#7A7F89]
              focus:outline-none focus:ring-2 focus:ring-white/80
            "
          />

          <button
            type="submit"
            disabled={busy}
            className="
              absolute right-0 top-0 bottom-0
              rounded-full bg-foreground px-6 text-white
              font-bold transition-colors
              hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-white/80
              disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer
            "
          >
            {busy ? "Enviando..." : "Suscribirse"}
          </button>

          {ok && (
            <p className="absolute bottom-[-20px] left-[30px] text-sm text-white/90" role="status">
              ¡Felicidades! Te suscribiste correctamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
