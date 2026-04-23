import { useEffect, useRef, useState } from "react";

type HeroPhotoCarouselProps = {
  images: string[];
  alt: string;
  intervalMs?: number;
  variant?: "card" | "background" | "mobile" | "mobile-peek";
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      setActive((i) =>
        dx < 0 ? (i + 1) % images.length : (i - 1 + images.length) % images.length,
      );
    }
    touchStartX.current = null;
  };

  if (variant === "mobile") {
    return (
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_20px_40px_-15px_hsl(var(--foreground)/0.3)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            width={1200}
            height={900}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-background" : "w-1.5 bg-background/60 hover:bg-background/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === "mobile-peek") {
    const count = images.length;
    const prevIdx = (active - 1 + count) % count;
    const nextIdx = (active + 1) % count;

    return (
      <div
        className="relative w-full select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Peek slider: side images poke in from left & right, center is the main image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {images.map((src, i) => {
            let position: "left" | "center" | "right" | "hidden" = "hidden";
            if (i === active) position = "center";
            else if (count > 1 && i === prevIdx) position = "left";
            else if (count > 1 && i === nextIdx) position = "right";

            const base =
              "absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out rounded-xl overflow-hidden";

            const styleByPosition: Record<typeof position, string> = {
              center:
                "left-1/2 -translate-x-1/2 w-[92%] aspect-[4/3] z-20 opacity-100 shadow-[0_20px_40px_-15px_hsl(var(--foreground)/0.35)]",
              left: "left-0 -translate-x-[78%] w-[42%] aspect-[4/3] z-10 opacity-70",
              right: "right-0 translate-x-[78%] w-[42%] aspect-[4/3] z-10 opacity-70",
              hidden:
                "left-1/2 -translate-x-1/2 w-[92%] aspect-[4/3] opacity-0 pointer-events-none",
            };

            return (
              <button
                key={src}
                type="button"
                onClick={() => {
                  if (position === "left") setActive(prevIdx);
                  else if (position === "right") setActive(nextIdx);
                }}
                aria-label={
                  position === "center" ? alt : `Show photo ${i + 1}`
                }
                tabIndex={position === "center" ? -1 : 0}
                className={`${base} ${styleByPosition[position]}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover"
                  width={1200}
                  height={900}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </button>
            );
          })}
        </div>

        {count > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

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
