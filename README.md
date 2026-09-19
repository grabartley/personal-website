# personal-website

My own personal website - a single-page application showcasing my experience, projects, and achievements.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next-generation frontend build tool
- **ESLint** - Code quality and style enforcement

## Dev Setup

``` bash
# install dependencies
npm install

# start dev server with hot reload
npm run dev

# lint and fix files
npm run lint

# build for production
npm run build

# preview production build
npm run preview
```

## Changing Employer

Employment state lives in one file: `src/data/employment.js`. The hero headline, the About Me intro, and the experience timeline are all derived from it, so no component needs editing.

- **Starting a new role:** add a new entry at the top of `entries` with `type: 'work'`, a `start` date, no `end` date, a `headline` for the hero, and an `aboutBlurb`. The site switches to present-tense copy automatically and the timeline renders the role as `Present`.
- **Leaving a role:** give its entry an `end` date. With no open-ended work entry the site drops every current-employer claim, the hero falls back to the employer-neutral headline, and the About Me intro switches to past tense naming the most recent employer.
- `organizationUrl` is optional. Without it the employer name renders as plain text instead of a link.
- `aboutBlurb` on a work entry holds that role's About Me prose in both tenses, so the copy travels with the role and a previous employer's wording never leaks onto a new one. Omit it and the intro falls back to neutral wording.

Historic sections (honours and awards, press features) are independent of this file and keep their references either way.

## Git Hooks

This project uses Git hooks (configured in `.github/hooks/`) to maintain code quality:

1. **Pre-commit hook** automatically runs on every commit:
   - Runs ESLint to check and fix code quality
   - Builds the project to ensure it compiles successfully
   - Stages any changes from linting fixes

To bypass the hook temporarily, use `git commit --no-verify`.

## Deployment

The website is built as a single-page application and hosted using [GitHub Pages](https://pages.github.com).

To deploy changes, simply commit them and push/merge into `master` - the build happens automatically via the pre-commit hook.