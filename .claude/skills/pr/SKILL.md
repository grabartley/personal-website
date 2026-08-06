---
name: pr
description: Create a PR for the personal-website repo using a git worktree branched from latest master
---

## Workflow

1. `git fetch origin master` — get latest master
2. `git worktree add -b <branch-name> ../personal-website-<branch-name> origin/master`
   - Branch name: short kebab-case describing the change (e.g. `add-sr-press-feature`)
3. `cd ../personal-website-<branch-name>` — make all changes in the worktree
4. Verify with Playwright before committing:
   - Run `npm run dev -- --port 5199` in the worktree (background)
   - Use the Playwright MCP tools to load every changed page and check structure and style render correctly (screenshot and read back the images, don't just check the DOM)
   - Capture screenshots of any new or visually changed content for the PR description (light mode, dark mode, and mobile width where relevant); save them to a temp directory outside the repo
   - Gotcha: the site scrolls on `document.body`, not `window`, so scroll with `document.body.scrollTop` before viewport screenshots
   - Stop the dev server and delete screenshot artifacts (`.playwright-mcp/`, stray `.png` files) before staging
5. Stage: `git add <files>`
6. Commit: `git commit -m "<short lowercase descriptive present tense message>"`
   - Pre-commit hook runs automatically: `npm run lint && npm run build`
   - Let it finish — hook handles everything including `docs/` build artifacts
7. Push: `git push origin <branch-name>`
8. Publish the screenshots to the `pr-assets` branch so the PR body can embed them:
   - In a temp directory: clone or init the orphan `pr-assets` branch, add the screenshots under `<branch-name>/`, commit, and push
   - First time (branch missing): `git init -b pr-assets && git remote add origin git@github.com:grabartley/personal-website.git`; afterwards: `git clone --branch pr-assets --single-branch --depth 1`
   - Embed in the PR body as `![<description>](https://raw.githubusercontent.com/grabartley/personal-website/pr-assets/<branch-name>/<file>.png)`
9. Create PR: `gh pr create --repo grabartley/personal-website --base master --head <branch-name> --title "<title>" --body "<body>"`
   - Title: short, descriptive, same style as commit message
   - Body: one-liner summary, then "**What's included:**" with bullet points, then "**Screenshots:**" with the embedded pr-assets images
10. After merge, clean up: `cd ../personal-website && git worktree remove ../personal-website-<branch-name>`

## Conventions

- Always branch from latest `master`, never from `dev`
- Use a fresh worktree per PR — don't reuse worktrees across branches
- Worktree path: `../personal-website-<branch-name>` (sibling directory)
- Branch names: kebab-case (e.g. `fix-mobile-nav`, `add-dark-mode`)
- Commit messages: lowercase present tense, no period at end
- PR descriptions: bullet points under "What's included:" header
- Pre-commit must complete successfully (runs `npm run lint && npm run build`)
- Playwright verification of changed pages is required before every PR
- PR descriptions must include screenshots of any new or visually changed content, embedded from the `pr-assets` branch
- No emoji in commit messages or PR titles