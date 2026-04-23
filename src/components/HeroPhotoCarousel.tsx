import { useEffect, useRef, useState } from "react";

type HeroPhotoCarouselProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
  variant?: "card" | "background" | "mobile";
};

const HeroPhotoCarousel = ({
  images,
  alt,
  intervalMs = 5500,
  variant = "card",
}: HeroPhotoCarouselProps) => {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  if (variant === "background") {
    return (
      <div className="absolute inset-0 w-full h-full">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
              i === active ? "opacity-100 animate-hero-zoom" : "opacity-0"
            }`}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {images.length > 1 && (
          <div className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-8 bg-background"
                    : "h-1.5 bg-background/50 hover:bg-background/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] md:aspect-[5/5] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_hsl(var(--foreground)/0.35)]">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          width={1200}
          height={1500}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-4">
        <p className="text-background/95 font-heading text-sm md:text-base leading-snug max-w-[70%]">
          Insured, certified &amp; locally trusted since 2009.
        </p>
        <span className="text-background/80 text-xs uppercase tracking-[0.2em] font-semibold">
          Austin, TX
        </span>
      </div>

      {images.length > 1 && (
        <div className="absolute top-4 right-4 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-background" : "w-1.5 bg-background/50 hover:bg-background/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroPhotoCarousel;
