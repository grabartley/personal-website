# personal-website

My own personal website - a single-page application showcasing my experience, projects, and achievements.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next-generation frontend build tool
- **Husky** - Git hooks for automated linting and building
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

## Deployment

The website is built as a single-page application and hosted using [GitHub Pages](https://pages.github.com).

The deployment process is automated using Husky pre-commit hooks:
1. On commit, `lint-staged` runs ESLint to check code quality
2. The pre-commit hook builds a production version using Vite
3. Built files are generated in the `docs` directory
4. All changes are automatically staged and committed

To deploy changes, simply commit them and push/merge into `master` - the build and deployment happen automatically.