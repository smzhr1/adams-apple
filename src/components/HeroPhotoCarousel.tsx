import { useEffect, useState } from "react";

type HeroPhotoCarouselProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
};

const HeroPhotoCarousel = ({ images, alt, intervalMs = 5000 }: HeroPhotoCarouselProps) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

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

      {/* Subtle bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent pointer-events-none" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex items-end justify-between gap-4">
        <p className="text-background/95 font-heading text-sm md:text-base leading-snug max-w-[70%]">
          Insured, certified &amp; locally trusted since 2009.
        </p>
        <span className="text-background/80 text-xs uppercase tracking-[0.2em] font-semibold">
          Austin, TX
        </span>
      </div>

      {/* Indicator dots */}
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
