import { useEffect, useRef } from "react";

import type { Swiper as SwiperInstance } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { CartIcon } from "@/components/icons";

export type Product = {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
};

type Props = { products: Product[] };

export const RelatedProducts = ({ products }: Props) => {
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const onResize = () => swiperRef.current?.update?.();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="w-full mt-2 overflow-x-clip">
      <h2 className="text-center text-[24px] sm:text-[36px] font-semibold text-foreground mb-2 uppercase">
        Te podría interesar también
      </h2>

      <div className="relative min-w-0 overflow-hidden">
        <div className="grid grid-cols-1 mx-auto max-w-[1170px] ">
          <Swiper
            modules={[Navigation]}
            onSwiper={(s) => (swiperRef.current = s)}
            navigation={{ prevEl: ".rel-prev", nextEl: ".rel-next" }}
            onInit={(s) => {
              s.navigation.init();
              s.navigation.update();
            }}
            observer
            observeParents
            observeSlideChildren
            watchOverflow
            resizeObserver
            updateOnWindowResize
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 14 },
              768: { slidesPerView: 3, spaceBetween: 18 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="!w-full !max-w-[1170px] overflow-hidden px-2"
          >
            {products.map((p, index) => (
              <SwiperSlide key={p.id + index} className="!h-auto box-border !mr-1 md:!mr-2">
                <article className="h-full w-full rounded-[10px] bg-white shadow-soft transition-all flex flex-col p-2 cursor-pointer">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full aspect-[4/3] object-cover md:max-w-[302px] min-h-[320px]"
                    />
                    {p.discount && (
                      <span className="absolute top-2 left-2 bg-brand-primary text-white px-3 py-[2px] rounded-[6px] text-[16px] font-semibold">
                        {p.discount}
                      </span>
                    )}
                    <span className="absolute top-2 right-2 bg-foreground text-white px-3 py-[2px] rounded-[6px]">
                      <CartIcon className="h-[23px] w-[23px]" />
                    </span>
                  </div>

                  <div className="p-3 flex flex-col gap-1 grow text-start">
                    <span className="text-[12px] text-foreground">Brand</span>
                    <p className="text-[15px] font-semibold text-foreground">{p.name}</p>

                    <div className="mt-auto flex items-center gap-2">
                      <p className="text-[18px] font-bold text-brand-primary">{p.price}</p>
                      {p.oldPrice && (
                        <p className="text-[15px] text-foreground line-through">{p.oldPrice}</p>
                      )}
                    </div>

                    <span className="w-max border border-brand-green text-brand-green bg-light-green px-[4px] py-[1px] rounded-[2px] uppercase text-[8px] font-medium">
                      Envío gratis stgo
                    </span>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          aria-label="Anterior"
          className="rel-prev group absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-brand-primary text-brand-primary shadow hover:bg-foreground/10 bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          aria-label="Siguiente"
          className="rel-next group absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full border border-brand-primary text-brand-primary shadow hover:bg-foreground/10 bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};
