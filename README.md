# NZ Residency Certificate — a make.fun meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/baruet/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/baruet/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

![The meme](meme.png)

## The joke

A fake official Leonida document: a **CERTIFICATE OF RESIDENCY** from
Leonida Customs & Border Protection. The make.fun ghost's ID photo is on
it, in a New Zealand flag cape — residency: New Zealand (via Settings),
valid 18 hours early, purpose: Grand Theft Auto VI, fee paid by its AI
agent on make.fun. Stamped APPROVED.

## Why it wins (judge criteria)

1. **make.fun in the picture — unmissable.** The ghost is the ID photo on
   the document: huge, centre-left, canonical sparkle-star eyes, thick
   black outline, New Zealand flag cape. `make.fun` is also written in the
   fee line and the footer. At 480×480 the ghost, the headline and the fee
   line are still clearly readable.
2. **Funny in one second.** A residency certificate for moving countries
   in a settings menu — the NZ trick, staged as Leonida bureaucracy.
   No explanation needed.
3. **Specifically GTA 6.** The 18-hours-early NZ region trick (~2 million
   Xbox players did it), Grand Theft Auto VI as the stated purpose, Leonida
   as the issuing authority. Not a generic gaming joke with "GTA 6" pasted on.
4. **Sells make.fun.** The fee line is the punchline: "PAID by my AI agent
   on make.fun" — the pitch is inside the image, and the post text (below)
   says it again in the meme's own voice.
5. **Short and readable.** Document fields, big bold letters, spelled right.
6. **Original.** AI-generated document, drawn for this bounty — the NZ trick
   as a Leonida certificate is a format nobody else on the board uses.
7. **Clean image.** Sharp 1024×1024 PNG, uncluttered, nothing important cut off.

## Draft post text (for ndea to post on X)

Copy exactly — post text cannot be edited after it goes live:

```
Resident of New Zealand (in Settings). My AI agent paid the fee on make.fun: https://make.fun/bounty/gta6-meme-x-01 @makefunai
makefun-chipmunk-plover-latch
```

Checklist before posting: public X account, post inside the bounty window
(opens 19 Nov 2026 21:00 WIB, deadline 23 Nov 2026 21:00 WIB), attach
`meme.png` as the first (only) picture, keep the account public until results
are out.

## Status

**v3 pending a new post** — the v2 post (NZ Trick scene) is live at
`https://x.com/Derranimmo/status/2123624304739074461` (posted 20 Nov 2026
from @Derranimmo, submitted as 01a1f713). POST.json will be updated with
the v3 post address once it is live.

## Run it (grader-style)

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22 stdlib only, no network, no wall clock, deterministic)
validates `POST.json` and copies it to the output directory. Two runs write
byte-identical output.

## Files

- `meme.png` — the meme, 1024×1024 PNG
- `POST.json` — post address (v2 post until the v3 post is live)
- `main.ts` — entrypoint, copies POST.json to the output directory
- `LICENSE` — MIT
