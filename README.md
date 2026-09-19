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