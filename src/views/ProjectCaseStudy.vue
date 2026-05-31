<template>
  <main class="case-study">
    <section class="case-study__container">
      <article v-if="project && project.slug === 'loot-lock'">
        <h1>LootLock</h1>
        <p class="case-study__subtitle">
          A server-authoritative Minecraft mod, architected and shipped to public release in a single weekend.
        </p>

        <img
          :src="lootLockBanner"
          alt="LootLock branded banner"
          class="case-study__banner"
        >

        <p class="case-study__status">
          {{ statusLine }} · MIT Licensed · Java 17
        </p>

        <h2>Quick stats</h2>
        <ul>
          <li>36-hour build window from architecture to public release</li>
          <li>Published on Modrinth and GitHub Releases</li>
          <li>100% Java codebase</li>
          <li>Full CI/CD with automated semantic versioning</li>
          <li>Server-authoritative multiplayer architecture</li>
        </ul>

        <h2>The 36-Hour Build</h2>
        <p>LootLock began as an architecture document on a Saturday morning. By Sunday evening it was a public, MIT-licensed Fabric mod available on Modrinth with a complete test suite, automated release pipeline, original branding, and a polished README. This is the story of how it got there, and what made the velocity possible without compromising on the engineering rigor I'd apply to production work at Yahoo.</p>
        <p>The problem LootLock solves is one every Minecraft player has experienced: inventory pollution. When you are clearing grass for a build, you do not want seeds. When you are mining for diamonds, you do not want cobblestone. When you are exploring lush caves, you do not want a backpack full of decorative plants. Existing mods either run client-side, unreliable in multiplayer, or lack the configuration polish needed for a real player audience. LootLock is server-authoritative, supports per-player profiles with allowlist and denylist modes, and provides both an in-game GUI and a complete slash command tree for operator administration.</p>
        <p>The development arc broke into four phases, each driven by formalized code review on every pull request:</p>
        <p><strong>Phase 1, Architecture and validation (Saturday morning).</strong> Five proofs of concept validated the riskiest unknowns first: the Mixin injection point for intercepting item pickup, the persistence layer surviving server restarts and corruption, the networking handshake with stale-revision rejection, dedicated server class loading boundaries, and the safest point for the delete-rejected-item path. None of this code shipped to production. All of it eliminated risk before writing the real implementation.</p>
        <p><strong>Phase 2, Core systems and command surface (Saturday afternoon).</strong> The data model, rule engine, server-side pickup interception, persistence, networking layer with optimistic concurrency control, and full slash command tree shipped behind tested boundaries. Conventional-commit PRs were reviewed against a formalized template covering architecture, blockers, should-fixes, dead code, and validation before merge.</p>
        <p><strong>Phase 3, Client experience and policy enforcement (Sunday).</strong> The Minecraft GUI surfaced everything the commands could do, main screen, profile list, rule list with search and pagination, item search with full item registry browsing, settings, ModMenu integration. Keybinds shipped unbound by default to avoid conflicts. The rejected-item delete mode landed with multi-layer policy enforcement: server policy persisted to disk, propagated via sync packet to the client, gated at command entry, evaluated again at pickup time as defense-in-depth, and surfaced in the UI with destructive-action confirmation flows.</p>
        <p><strong>Phase 4, Release engineering (Sunday evening).</strong> README rewrite with command tables and architecture overview, CONTRIBUTING.md, MIT LICENSE properly attributed, fabric.mod.json polished with pinned dependencies, branding designed and integrated, GitHub repository made public with branch protection and CODEOWNERS, automated CI/CD publishing tagged GitHub Releases on every merge to main, and the Modrinth listing submitted with proper Alpha release-channel discipline.</p>

        <h2>Engineering Highlights</h2>
        <p><strong>Server-authoritative architecture with optimistic concurrency.</strong> Every client-side profile mutation carries a base revision number. The server validates against current state and rejects stale updates with an authoritative re-sync, ensuring that two simultaneous edits never silently overwrite each other. This pattern matters less for a single-player Minecraft mod and more as a demonstrated competency relevant to distributed systems work at production scale.</p>
        <p><strong>Side-safe code separation enforced at build time.</strong> Fabric mods must keep client-only code, rendering, GUI, keybinds, out of the server-side classpath or dedicated servers will crash with NoClassDefFoundError on startup. LootLock enforces this with a custom Gradle task, <code>verifyMainSourceSideSafety</code>, that fails CI if <code>src/main/java</code> references <code>net.minecraft.client.*</code> or the client-only package. The rule is not trust-based, it is verified by the build.</p>
        <p><strong>Defense-in-depth permissions.</strong> Operator-gated commands check permission level 2 at the network packet boundary, not at the command parser layer, ensuring even a custom client cannot bypass the gate. Server policy for destructive actions like rejected-item deletion is persisted to disk, propagated to clients via sync packet, and re-checked at evaluation time.</p>
        <p><strong>Production-grade CI/CD pipeline.</strong> GitHub Actions runs Spotless formatting checks, full test suite with coverage reporting, JUnit reports for unit and gametests, a dedicated server smoke boot to catch class-loading regressions, semantic version computation from conventional commit types, automated tagging with the <code>v</code> prefix, and GitHub Release publication with auto-generated changelogs.</p>
        <p><strong>Rigorous human-led code review on every PR.</strong> A formalized review template covered architecture assessment, blocker classification, should-fix items, carry-forward candidates, dead code checks, and validation steps.</p>

        <h2>The Agentic AI Workflow</h2>
        <p>LootLock was developed using an agentic AI workflow with Codex as the primary implementer and a formalized human review loop on every change. This is the same pattern I apply to my Squad Lead work at Yahoo on AI Applications: the AI does the implementation, the senior engineer does the architecture, the review, and the judgment calls that define what good means for the system.</p>

        <h2>Tech Stack &amp; Architecture</h2>
        <ul>
          <li><strong>Language:</strong> Java 17</li>
          <li><strong>Runtime:</strong> Fabric Loader 0.19.2+, Fabric API 0.92.9+1.20.1</li>
          <li><strong>Build:</strong> Gradle with Fabric Loom 1.16-SNAPSHOT, custom verifyMainSourceSideSafety task</li>
          <li><strong>Testing:</strong> JUnit Jupiter 5.10.2, Fabric Gametest harness</li>
          <li><strong>CI/CD:</strong> GitHub Actions with conventional commits and automated releases</li>
          <li><strong>Networking:</strong> Fabric ServerPlayNetworking + ClientPlayNetworking</li>
          <li><strong>Persistence:</strong> JSON-serialized per-player data with corruption recovery</li>
          <li><strong>Optional integrations:</strong> Mod Menu 7.2.2+</li>
        </ul>

        <h2>Outcomes</h2>
        <ul>
          <li>Public release shipped to Modrinth as Alpha within 36 hours of concept</li>
          <li>Full automated release pipeline producing tagged GitHub Releases with auto-generated changelogs</li>
          <li>Source code open under MIT License at grabartley/minecraft-loot-lock</li>
          <li>Branding designed in collaboration with AI image generation and refined with a custom image processing pipeline</li>
        </ul>

        <h2>What's Next</h2>
        <p>The immediate roadmap focuses on a multiplayer validation suite, then promotion to Beta release channel on Modrinth once stability is proven, then v1.0.0 stable when feedback confirms the mod is production-ready. LootLock is the first of several mods I am building. The next is <strong>Dogs Unleashed</strong>, a dragon companion mod currently in pre-release development.</p>

        <h2>Links</h2>
        <ul>
          <li>
            <a
              href="https://github.com/grabartley/minecraft-loot-lock"
              target="_blank"
              rel="noreferrer nofollow"
            >Source code</a>
          </li>
          <li>
            <a
              href="https://modrinth.com/mod/loot-lock"
              target="_blank"
              rel="noreferrer nofollow"
            >Download</a>
          </li>
          <li>
            <a
              href="https://github.com/grabartley/minecraft-loot-lock/releases"
              target="_blank"
              rel="noreferrer nofollow"
            >Releases</a>
          </li>
          <li>
            <a
              href="https://ko-fi.com/grahambartley"
              target="_blank"
              rel="noreferrer nofollow"
            >Support</a>
          </li>
        </ul>
      </article>

      <article v-else>
        <h1>Project not found</h1>
        <p>This case study is not available yet.</p>
      </article>
    </section>
  </main>
</template>

<script>
import { findProjectBySlug } from '@/data/projects';
import projectStatuses from '@/data/project-status.json';
import lootLockBanner from '@/assets/loot-lock-banner.png';

export default {
  name: 'ProjectCaseStudy',
  data() {
    return {
      lootLockBanner,
    };
  },
  computed: {
    project() {
      return findProjectBySlug(this.$route.params.slug);
    },
    status() {
      return projectStatuses[this.$route.params.slug];
    },
    statusLine() {
      if (!this.status?.version || !this.status?.channel) {
        return 'In Development';
      }
      return `Live on ${this.status.platform} · ${this.status.channel} · ${this.status.version}`;
    },
  },
};
</script>

<style scoped>
.case-study {
  padding: 4rem 1.5rem;
  background: var(--bg-secondary);
}

.case-study__container {
  max-width: 960px;
  margin: 0 auto;
  background: var(--bg-glass);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
}

h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 0.75rem;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

p,
li {
  color: var(--text-secondary);
  line-height: 1.7;
}

ul {
  margin-left: 1.2rem;
  display: grid;
  gap: 0.35rem;
}

.case-study__subtitle {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.case-study__banner {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.case-study__status {
  font-size: 0.95rem;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  width: fit-content;
  margin-bottom: 1rem;
}

a {
  color: var(--accent-primary);
}

@media (max-width: 768px) {
  .case-study {
    padding: 3rem 1rem;
  }

  .case-study__container {
    padding: 1.5rem;
  }
}
</style>
