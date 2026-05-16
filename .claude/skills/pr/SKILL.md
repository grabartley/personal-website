---
name: pr
description: Create a PR for the personal-website repo using a git worktree branched from latest master
---

## Workflow

1. `git fetch origin master` — get latest master
2. `git worktree add -b <branch-name> ../personal-website-<branch-name> origin/master`
   - Branch name: short kebab-case describing the change (e.g. `add-sr-press-feature`)
3. `cd ../personal-website-<branch-name>` — make all changes in the worktree
4. Stage: `git add <files>`
5. Commit: `git commit -m "<short lowercase descriptive present tense message>"`
   - Pre-commit hook runs automatically: `npm run lint && npm run build`
   - Let it finish — hook handles everything including `docs/` build artifacts
6. Push: `git push origin <branch-name>`
7. Create PR: `gh pr create --repo grabartley/personal-website --base master --head <branch-name> --title "<title>" --body "<body>"`
   - Title: short, descriptive, same style as commit message
   - Body: one-liner summary, then "**What's included:**" with bullet points
8. After merge, clean up: `cd ../personal-website && git worktree remove ../personal-website-<branch-name>`

## Conventions

- Always branch from latest `master`, never from `dev`
- Use a fresh worktree per PR — don't reuse worktrees across branches
- Worktree path: `../personal-website-<branch-name>` (sibling directory)
- Branch names: kebab-case (e.g. `fix-mobile-nav`, `add-dark-mode`)
- Commit messages: lowercase present tense, no period at end
- PR descriptions: bullet points under "What's included:" header
- Pre-commit must complete successfully (runs `npm run lint && npm run build`)
- No emoji in commit messages or PR titles