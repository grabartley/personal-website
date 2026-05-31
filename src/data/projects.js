export const projects = [
  {
    slug: 'loot-lock',
    title: 'LootLock',
    tagline:
      'A server-authoritative Minecraft mod for per-player item pickup filtering, architected and shipped to public release in a single weekend.',
    summary: [
      'LootLock is a Fabric mod for Minecraft 1.20.1 that lets players filter which dropped items enter their inventory, with per-player profiles and server-authoritative enforcement so the behavior is reliable in multiplayer. It exists because inventory pollution is a real friction point in survival worlds, seeds while clearing grass, cobblestone while mining, decorative blocks while exploring, and existing mods either trust the client too much or do not ship with the polish a public release needs.',
      "The project went from empty architecture document to public Modrinth listing in approximately 36 hours, with full test coverage, CI/CD pipeline, automated semantic versioning, branch protection, and original branding. The execution leveraged an agentic AI development workflow with Codex as the primary implementer and rigorous human-led code review on every PR, a pattern that's directly relevant to the AI Applications work I lead at Yahoo.",
    ],
    techStack: [
      'Java 17',
      'Fabric API',
      'Minecraft 1.20.1',
      'Mixin',
      'Gradle',
      'JUnit 5',
      'GitHub Actions',
      'Conventional Commits',
      'Semantic Release',
    ],
    highlights: [
      'Server-authoritative architecture with revision-based optimistic concurrency control for client-server profile sync, preventing stale-update conflicts in multiplayer.',
      'Production-grade CI/CD with automated semantic versioning from conventional commits, dedicated server smoke tests, formatting enforcement, JUnit reporting, and tagged GitHub Releases on every merge to main.',
      'Defense-in-depth permissions with operator-gated server policy commands, side-safe code separation enforced by custom Gradle task, and policy propagation from server to client preventing forbidden actions client-side.',
      'Comprehensive test coverage including unit tests for the rule engine, network packet round-trips, persistence layer, and GUI controller logic, caught architectural regressions during review that would have otherwise shipped to users.',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/grabartley/minecraft-loot-lock' },
      { label: 'Modrinth', url: 'https://modrinth.com/mod/loot-lock' },
      { label: 'Case Study', url: '/projects/loot-lock' },
    ],
  },
];

export function findProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
