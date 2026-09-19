## Goal

Remove every claim of a *current* employer from the site, and make swapping in a future employer a one-file change instead of a hunt through components.

Historic references stay. The experience timeline, honours and awards, and the Silicon Republic press feature are all records of things that happened and are unaffected apart from the current role gaining an end date.

## Current Behavior

The employer is hardcoded in several places:

- `src/components/Hero.vue` headline reads `Senior Software Engineer | AI Applications Squad Lead @ Yahoo`
- `src/components/About.vue` intro states "I'm a Senior Software Engineer and Squad Lead at [Yahoo]" in the present tense, with a hardcoded company link
- `src/components/ExperienceTimeline.vue` first entry is `Jan 2024 - Present` with a description written in the present tense ("I am currently leading...")

There is no shared source of truth for employment state, so a future employer change means editing three components.

## Target Behavior

A single module, `src/data/employment.js`, owns current employment state and the timeline history. Components derive their copy from it. Setting the current employer to `null` produces an employer-neutral site; filling it in produces an employed site, with no component edits either way.

## Specific Changes

- Add `src/data/employment.js` exporting:
  - the professional title and headline used by the hero
  - a `currentEmployer` value that is `null` when between roles, or an object with name and URL when employed
  - a `mostRecentEmployer` value used for past-tense copy
  - the timeline entries, so the "Present" end date is derived rather than hardcoded
- `src/components/Hero.vue`: render the headline from the module, appending `@ <employer>` only when a current employer is set. With no current employer the headline reads `Senior Software Engineer | Technical Lead`.
- `src/components/About.vue`: render the intro from the module. With no current employer it uses past tense and names the most recent employer ("most recently at Yahoo"). With a current employer set it reverts to the present-tense "at <employer>" phrasing with the company link.
- `src/components/ExperienceTimeline.vue`: read entries from the module. The Yahoo senior role ends `Sep 2026` and its description moves to past tense. An entry with no end date renders as `Present`.
- Update `README.md` with a short section explaining how to change employer.

## Acceptance Criteria

- No page states or implies a current employer while `currentEmployer` is `null`.
- Timeline, honours and awards, and the press feature still show their historic Yahoo references.
- Timeline first entry reads `Jan 2024 - Sep 2026` with a past-tense description.
- Hero headline reads `Senior Software Engineer | Technical Lead`.
- About intro reads in past tense and names Yahoo as the most recent employer.
- Setting `currentEmployer` to a populated object restores present-tense copy and the `@ <employer>` headline suffix with no component changes.
- Unit tests cover both the employed and between-roles states of the derived copy.
- `npm run lint` and `npm run build` both pass, and `docs/` build output is committed.

## Out Of Scope

- No visual or layout redesign; copy and data sourcing only.
- No changes to honours and awards content or the press feature.
- No changes to project case study pages.
