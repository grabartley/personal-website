Employment state lives in a single module, `src/data/employment.js`, which owns the role history and derives everything the site says about where I work. The hero headline, the About Me intro, and the experience timeline all read from it, so changing employer is a one-file edit rather than a hunt across three components.

The module infers current employment from the history itself: a work entry with no end date is the current role. With one present, the hero appends `@ <employer>`, the About intro reads in present tense with a linked company name, and the timeline renders the role as `Present`. With none, the hero falls back to an employer-neutral headline, the About intro switches to past tense naming the most recent employer, and no entry claims to be ongoing.

| State | Hero headline | About intro |
|---|---|---|
| Open-ended work entry | `<role headline> @ <employer>` | "...Squad Lead at `<employer>`, delivering..." |
| Every work entry closed | `Senior Software Engineer \| Technical Lead` | "...Squad Lead, most recently at `<employer>`, where I delivered..." |
| No work history | `Senior Software Engineer \| Technical Lead` | "...Squad Lead." with no company clause |

As shipped, the most recent role closes in Sep 2026 and the site makes no current-employer claim. Historic content is untouched: the full timeline, the honours and awards, and the Silicon Republic press feature all keep their references.

Unit tests cover the period formatting, current-role and most-recent-role resolution, and both tenses of the derived headline and intro copy, including the no-history edge case. `README.md` documents the swap procedure.

Closes #29
