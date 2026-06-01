<template>
  <div class="case-study">
    <nav class="case-study__back-nav">
      <router-link
        to="/"
        class="case-study__back glass"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </router-link>
    </nav>

    <article class="case-study__article">
      <header class="case-study__header">
        <img
          :src="banner"
          alt="LootLock — Minecraft mod logo banner"
          class="case-study__banner"
        >
        <h1 class="case-study__title gradient-text">
          LootLock
        </h1>
        <p class="case-study__subtitle">
          A server-authoritative Minecraft mod, architected and shipped to public release in a single weekend.
        </p>
      </header>

      <div class="case-study__content">
        <section class="case-study__section">
          <h2>The 36-Hour Build</h2>
          <p>
            LootLock began as an architecture document on a Saturday morning. By Sunday evening it was a public, MIT-licensed Fabric mod available on Modrinth with a complete test suite, automated release pipeline, original branding, and a polished README. This is the story of how it got there &mdash; and what made the velocity possible without compromising on the engineering rigor I'd apply to production work at Yahoo.
          </p>
          <p>
            The problem LootLock solves is one every Minecraft player has experienced: inventory pollution. When you're clearing grass for a build, you don't want seeds. When you're mining for diamonds, you don't want cobblestone. When you're exploring lush caves, you don't want a backpack full of decorative plants. Existing mods either run client-side (unreliable in multiplayer) or lack the configuration polish needed for a real player audience. LootLock is server-authoritative, supports per-player profiles with allowlist and denylist modes, and provides both an in-game GUI and a complete slash command tree for operator administration.
          </p>
          <p>The development arc broke into four phases, each driven by formalized code review on every pull request:</p>
          <p>
            <strong>Phase 1 &mdash; Architecture and validation (Saturday morning).</strong> Five proofs of concept validated the riskiest unknowns first: the Mixin injection point for intercepting item pickup, the persistence layer surviving server restarts and corruption, the networking handshake with stale-revision rejection, dedicated server class loading boundaries, and the safest point for the delete-rejected-item path. None of this code shipped to production. All of it eliminated risk before writing the real implementation.
          </p>
          <p>
            <strong>Phase 2 &mdash; Core systems and command surface (Saturday afternoon).</strong> The data model, rule engine, server-side pickup interception, persistence, networking layer with optimistic concurrency control, and full slash command tree shipped behind tested boundaries. Conventional-commit PRs were reviewed against a formalized template covering architecture, blockers, should-fixes, dead code, and validation before merge.
          </p>
          <p>
            <strong>Phase 3 &mdash; Client experience and policy enforcement (Sunday).</strong> The Minecraft GUI surfaced everything the commands could do &mdash; main screen, profile list, rule list with search and pagination, item search with full item registry browsing, settings, ModMenu integration. Keybinds shipped unbound by default to avoid conflicts. The rejected-item delete mode landed with multi-layer policy enforcement: server policy persisted to disk, propagated via sync packet to the client, gated at command entry, evaluated again at pickup time as defense-in-depth, and surfaced in the UI with destructive-action confirmation flows.
          </p>
          <p>
            <strong>Phase 4 &mdash; Release engineering (Sunday evening).</strong> README rewrite with command tables and architecture overview, CONTRIBUTING.md, MIT LICENSE properly attributed, fabric.mod.json polished with pinned dependencies, branding designed and integrated, GitHub repository made public with branch protection and CODEOWNERS, automated CI/CD publishing tagged GitHub Releases on every merge to main, and the Modrinth listing submitted with proper Alpha release-channel discipline.
          </p>
        </section>

        <section class="case-study__section">
          <h2>Engineering Highlights</h2>

          <p>
            <strong>Server-authoritative architecture with optimistic concurrency.</strong> Every client-side profile mutation carries a base revision number. The server validates against current state and rejects stale updates with an authoritative re-sync, ensuring that two simultaneous edits never silently overwrite each other. This pattern matters less for a single-player Minecraft mod and more as a demonstrated competency relevant to distributed systems work at production scale.
          </p>

          <p>
            <strong>Side-safe code separation enforced at build time.</strong> Fabric mods must keep client-only code (rendering, GUI, keybinds) out of the server-side classpath or dedicated servers will crash with NoClassDefFoundError on startup. LootLock enforces this with a custom Gradle task, <code>verifyMainSourceSideSafety</code>, that fails CI if <code>src/main/java</code> references <code>net.minecraft.client.*</code> or the client-only package. The rule isn't trust-based &mdash; it's verified by the build.
          </p>

          <p>
            <strong>Defense-in-depth permissions.</strong> Operator-gated commands check permission level 2 at the network packet boundary, not at the command parser layer, ensuring even a custom client can't bypass the gate. Server policy for destructive actions like rejected-item deletion is persisted to disk, propagated to clients via sync packet, AND re-checked at evaluation time. Any single layer being bypassed still leaves two more layers of enforcement.
          </p>

          <p>
            <strong>Production-grade CI/CD pipeline.</strong> GitHub Actions runs Spotless formatting checks, the full test suite with coverage reporting, JUnit reports for unit and gametests, a dedicated server smoke boot to catch class-loading regressions, semantic version computation from conventional commit types, automated tagging with the <code>v</code> prefix, GitHub Release publication with auto-generated changelogs, and version-aware pre-release flagging that automatically promotes to stable when the major version crosses to 1.x. Every merge to main produces a tagged, downloadable release.
          </p>

          <p>
            <strong>Rigorous human-led code review on every PR.</strong> A formalized review template covered architecture assessment, blocker classification, should-fix items, carry-forward candidates, dead code checks, and validation steps. The discipline caught issues that would have shipped: a draft-architecture regression that lost the multi-field update pattern, a GUI bug where text overlapped buttons in dev testing, a CODEOWNERS gap, and a Ko-fi handle typo. Velocity without review discipline is a bug factory. Velocity with review discipline is leverage.
          </p>
        </section>

        <section class="case-study__section">
          <h2>The Agentic AI Workflow</h2>
          <p>
            LootLock was developed using an agentic AI workflow with Codex as the primary implementer and a formalized human review loop on every change. This is the same pattern I apply to my Squad Lead work at Yahoo on AI Applications: the AI does the implementation; the senior engineer does the architecture, the review, and the judgment calls that define what "good" means for the system.
          </p>
          <p>
            The loop ran roughly: I'd specify the next change against the architecture document, Codex would implement and open a PR, I'd review against the template, push back on architecture violations or scope creep, request specific changes with rationale, and iterate until the work was ship-quality. When the review caught a regression &mdash; a dead config flag, a stale cache invalidation, a UI rendering bug only visible in dev testing &mdash; the feedback fed directly back into the next iteration.
          </p>
          <p>
            What this proved, for my own conviction more than anyone else's: agentic AI development is not a replacement for senior engineering judgment, it's an accelerator for it. The bottleneck moves from "implementing the code" to "knowing what code should be implemented and what's good enough to ship." The senior engineer is more leveraged, not less needed.
          </p>
        </section>

        <section class="case-study__section">
          <h2>Tech Stack &amp; Architecture</h2>
          <dl class="case-study__dl">
            <dt>Language</dt>
            <dd>Java 17</dd>
            <dt>Runtime</dt>
            <dd>Fabric Loader 0.19.2+, Fabric API 0.92.9+1.20.1</dd>
            <dt>Build</dt>
            <dd>Gradle with Fabric Loom 1.16-SNAPSHOT, custom verifyMainSourceSideSafety task</dd>
            <dt>Testing</dt>
            <dd>JUnit Jupiter 5.10.2, Fabric Gametest harness</dd>
            <dt>CI/CD</dt>
            <dd>GitHub Actions with conventional commits, mathieudutour/github-tag-action@v6.2 for semantic versioning, softprops/action-gh-release@v2 for automated releases</dd>
            <dt>Networking</dt>
            <dd>Fabric ServerPlayNetworking + ClientPlayNetworking with custom packet payloads via Identifier + PacketByteBuf</dd>
            <dt>Persistence</dt>
            <dd>JSON-serialized per-player data with corruption recovery (renames bad files to .broken.&lt;timestamp&gt; and recreates defaults)</dd>
            <dt>Optional integrations</dt>
            <dd>Mod Menu 7.2.2+ for client settings entrypoint</dd>
          </dl>
          <p><strong>Source structure:</strong></p>
          <ul>
            <li><code>src/main/java</code> &mdash; Server + common code (side-safe, no client imports)</li>
            <li><code>src/client/java</code> &mdash; Client-only code (GUI, keybinds, ModMenu integration)</li>
            <li><code>src/test/java</code> &mdash; Unit tests for rule engine, network, persistence, GUI controllers</li>
          </ul>
        </section>

        <section class="case-study__section">
          <h2>Outcomes</h2>
          <ul>
            <li>Public release shipped to Modrinth within 36 hours of concept</li>
            <li>Full automated release pipeline producing tagged GitHub Releases with auto-generated changelogs</li>
            <li>Source code open under MIT License at grabartley/minecraft-loot-lock</li>
          </ul>
        </section>

        <section class="case-study__section">
          <h2>What's Next</h2>
          <p>
            The immediate roadmap focuses on a multiplayer validation suite to surface real-world bugs that unit tests miss, then promotion to Beta release channel on Modrinth once stability is proven, then v1.0.0 stable when feedback confirms the mod is production-ready. Longer-term considerations include tag-based filtering (#minecraft:seeds), import/export of profiles between worlds, and HUD blocked-item summaries.
          </p>
          <p>
            LootLock is the first of several mods I'm building. The next is <strong>Dogs Unleashed</strong>, a dragon companion mod developed with my girlfriend handling art and animation while I handle code, currently in pre-release development.
          </p>
        </section>

        <section class="case-study__section case-study__section--links">
          <h2>Links</h2>
          <div class="case-study__links">
            <a
              href="https://github.com/grabartley/minecraft-loot-lock"
              target="_blank"
              rel="noreferrer nofollow"
              class="case-study__link glass"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Source code
            </a>
            <a
              href="https://modrinth.com/mod/loot-lock"
              target="_blank"
              rel="noreferrer nofollow"
              class="case-study__link glass"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download on Modrinth
            </a>
            <a
              href="https://github.com/grabartley/minecraft-loot-lock/releases"
              target="_blank"
              rel="noreferrer nofollow"
              class="case-study__link glass"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              Releases
            </a>
            <a
              href="https://ko-fi.com/grahambartley"
              target="_blank"
              rel="noreferrer nofollow"
              class="case-study__link glass"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Support
            </a>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import banner from '@/assets/projects/loot-lock-banner.png';

export default {
  name: 'LootLock',
  setup() {
    return { banner };
  },
};
</script>

<style scoped>
.case-study {
  min-height: 100vh;
  background: var(--bg-secondary);
  padding-top: 5rem;
}

.case-study__back-nav {
  max-width: 860px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
}

.case-study__back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--accent-primary);
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.case-study__back:hover {
  transform: translateX(-3px);
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-md);
}

.case-study__back svg {
  width: 18px;
  height: 18px;
}

.case-study__article {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 2rem 6rem;
}

.case-study__banner {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-xl);
}

.case-study__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.case-study__subtitle {
  font-size: clamp(1.1rem, 2vw, 1.375rem);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-color);
}

.case-study__content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.case-study__section h2 {
  font-size: clamp(1.4rem, 3vw, 1.875rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.case-study__section p {
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.case-study__section p:last-child {
  margin-bottom: 0;
}

.case-study__section ul {
  list-style: disc;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.case-study__section li {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.case-study__section code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.875em;
  background: var(--bg-glass);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.1em 0.4em;
  color: var(--accent-primary);
}

.case-study__dl {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.75rem 1.5rem;
  margin-bottom: 1.25rem;
}

.case-study__dl dt {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.case-study__dl dd {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.case-study__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.case-study__link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--accent-primary);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.case-study__link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-primary);
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
}

.case-study__link svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .case-study__article {
    padding: 1.5rem 1rem 4rem;
  }

  .case-study__back-nav {
    padding: 1rem 1rem 0;
  }

  .case-study__dl {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }

  .case-study__dl dt {
    margin-top: 0.75rem;
  }

  .case-study__dl dt:first-child {
    margin-top: 0;
  }
}
</style>
