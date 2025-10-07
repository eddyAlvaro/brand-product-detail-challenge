type Props = {
  main: string;
  thumbs: string[];
  title: string;
};

export const ProductGallery = ({ main, thumbs, title }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <img
        src={main}
        alt={title}
        className="w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div className="grid grid-cols-3 gap-4">
        {thumbs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title} miniatura ${i + 1}`}
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    </section>
  );
};
