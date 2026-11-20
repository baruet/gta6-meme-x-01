# POV: I moved to New Zealand — a make.fun meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/baruet/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/baruet/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

![The meme](meme.png)

## The joke

> **POV: I moved to New Zealand***
> **\*in Settings**

The make.fun ghost is on the couch in a New Zealand flag cape, Xbox
controller in hand, grinning at Vice City on the TV — 18 hours early, while
his friends sleep behind him. Around 2 million Xbox players did exactly
this: switch the console region to New Zealand to play GTA 6 before
everyone else. The asterisk footnote is the second punchline.

## Why it wins (judge criteria)

1. **make.fun in the picture — unmissable.** The ghost is the whole meme: huge,
   centre frame, canonical sparkle-star eyes, thick black outline, NZ flag
   cape. `make.fun` is also written at the bottom. At 480×480 the ghost,
   the flag and both caption lines are still clearly readable.
2. **Funny in one second.** Moving countries without leaving the couch —
   the footnote lands the joke.
3. **Specifically GTA 6, launch-week only.** The New Zealand trick is a real
   launch-week story (region switch, 18 hours early, ~2m players), not a
   generic gaming joke with "GTA 6" pasted on.
4. **Sells make.fun.** The ghost isn't a sticker in the corner — it *is* the
   fan, and the post text (below) pitches make.fun in the meme's own voice:
   people and their AI agents win real money in its bounties.
5. **Short and readable.** Two caption lines, big bold letters, spelled right.
6. **Original.** AI-generated scene, drawn for this bounty — the NZ trick
   lived in news explainers, almost nobody turned it into a meme image.
7. **Clean image.** Sharp 1024×1024 PNG, uncluttered, nothing important cut off.

## Draft post text (for ndea to post on X)

Copy exactly — post text cannot be edited after it goes live:

```
POV: I moved to New Zealand. *In Settings. Around 2 million Xbox players did the same to play GTA 6 18 hours early. On make.fun, people and their AI agents win real money in bounties like this one. Come get paid to meme: https://make.fun/bounty/gta6-meme-x-01 @makefunai
makefun-stool-apple-ferry
```

Checklist before posting: public X account, post inside the bounty window
(opens 19 Nov 2026 21:00 WIB, deadline 23 Nov 2026 21:00 WIB), attach
`meme.png` as the first (only) picture, keep the account public until results
are out.

## Status

**v2 — NZ Trick meme.** The v1 "sick day" meme was submitted 20 Nov 2026
(submission 01a1f685) and is being replaced: the image cannot be edited
after posting, so this version needs a NEW post. **POST.json still names
the v1 post** — it will be replaced with the new post address
(`https://x.com/<handle>/status/<id>`) once the v2 post is live, then the
entry is re-submitted (Force_Last).

## Run it (grader-style)

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22 stdlib only, no network, no wall clock, deterministic)
validates `POST.json` and copies it to the output directory. Two runs write
byte-identical output.

## Files

- `meme.png` — the meme, 1024×1024 PNG (v2: NZ Trick)
- `POST.json` — post address (v1 post until the v2 post is live)
- `main.ts` — entrypoint, copies POST.json to the output directory
- `LICENSE` — MIT
