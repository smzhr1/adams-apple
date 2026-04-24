

## Add Geographic Confirmation Line to Location Hero

Add a small map pin icon + county/region line directly under the eyebrow tag in the location page hero, so visitors instantly confirm we serve their area.

### What you'll see

On `/locations/round-rock` (and every future location page), directly below the green "Round Rock, TX Tree Service" eyebrow and above the H1, a new line:

```text
[📍] Serving Round Rock & Williamson County
```

Styled as a small, muted-foreground line with the map pin icon in the secondary green — understated so it doesn't compete with the H1, but immediately scannable.

### Implementation

**1. `src/data/locations.ts`**
- Add a new optional field `geoRegion: string` to the `LocationContent` type.
- Set Round Rock's value to `"Serving Round Rock & Williamson County"`.
- (Future locations will each get their own — e.g. Georgetown → Williamson County, Bee Cave → Travis County, Buda → Hays County.)

**2. `src/pages/LocationPage.tsx`**
- In the hero block, directly under the existing eyebrow `<div>` (the one with the green dash + "Round Rock, TX Tree Service"), add:
  ```tsx
  {location.geoRegion && (
    <div className="flex items-center gap-2 text-muted-foreground text-sm">
      <MapPin className="w-4 h-4 text-secondary" />
      <span>{location.geoRegion}</span>
    </div>
  )}
  ```
- `MapPin` is already imported from `lucide-react` in this file — no new imports needed.

### What stays the same

- Hero layout, photo, H1, subhead, CTAs, stats — all unchanged.
- All other sections untouched.
- No styling system changes; uses existing tokens (`text-muted-foreground`, `text-secondary`).

