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
          alt="Voiced Dialogue RuneLite plugin banner"
          class="case-study__banner"
        >
        <h1 class="case-study__title gradient-text">
          Voiced Dialogue
        </h1>
        <p class="case-study__subtitle">
          My first RuneLite plugin: real AI voices for over 13,700 Old School RuneScape NPCs, published on the Plugin Hub and actively used by more than 150 players.
        </p>
      </header>

      <div class="case-study__content">
        <section class="case-study__section">
          <h2>Giving Gielinor a Voice</h2>
          <p>
            Old School RuneScape has more than two decades of quest dialogue, and every line of it is silent text in a box. Voiced Dialogue changes that. Walk up to any NPC and they speak: matched by race and gender, delivered with real emotion read from their chat-head expression, and for over 6,400 iconic characters, performed through a hand-written personality profile with its own accent, persona, and pace. Scottish dwarves, Dracula-esque vampyres, Norse Fremennik raiders, and your own adventurer, all out loud, all in real time.
          </p>
          <p>
            This was my first RuneLite plugin, built end to end: from a weekend prototype, through three abandoned TTS architectures, to a Plugin Hub launch and an ongoing live service with real users, community contributors, and a steady release cadence.
          </p>
        </section>

        <section class="case-study__section">
          <h2>The Developer Journey</h2>
          <p>
            <strong>The prototype (June 2025).</strong> The first weekend produced a working proof of concept: hook RuneLite's dialogue widgets, synthesize the line, play it back, cut the audio instantly when the player skips. Engineering discipline was there from day one, with Spotless formatting and pre-commit hooks landing in the first four pull requests. A follow-up added data-driven voice casting, using OSRS Wiki and OSRSBox data to detect each NPC's race and gender so voices could be assigned by who the character actually is.
          </p>
          <p>
            <strong>The deep dive (June 2026).</strong> Turning a prototype into something shippable meant solving text-to-speech for real. I built and shipped, in sequence: an in-process neural TTS engine (Kokoro via sherpa-onnx), a cross-platform external engine with signed builds for Windows, macOS, and Linux, a cloud backend with SSML emotion styles, and a local GPU engine (Zonos) capable of cloning the player's own voice from a reference clip, bundled and split into sub-2GiB release parts to fit GitHub's limits. Alongside the engines came the systems that make voices feel right: a static voice lookup table covering every dialogue NPC in the game, emotion detection driven by chat-head animation IDs, and streaming playback with an LRU cache running entirely off the game thread.
          </p>
          <p>
            <strong>The pivot.</strong> The RuneLite Plugin Hub has strict rules: plugins must compile under the hub's Java 11 standard build, avoid deprecated client APIs, and stay lean enough to review. Multi-gigabyte native engine bundles were never going to pass. So I killed three working backends and rebuilt the synthesis layer as a cloud-only architecture on Gemini TTS, preserving everything that mattered (emotion, accents, per-NPC casting) while cutting everything the platform could not accept. Deleting working code you are proud of is one of the harder engineering disciplines, and this project demanded it at scale.
          </p>
          <p>
            <strong>The launch (July 2026).</strong> Before submission I ran a full code quality audit, decomposing the plugin into single-responsibility classes, parameterizing the test suite, and organizing the codebase into feature packages. v0.1.0 went live on the Plugin Hub on July 1st, 2026, after more than 100 merged pull requests.
          </p>
        </section>

        <section class="case-study__section">
          <h2>Engineering Highlights</h2>

          <p>
            <strong>Nothing blocks the game thread.</strong> Synthesis, playback, disk cache reads, prefetching, and backend health checks all run off the client thread, with a lock-free health check replacing an earlier design that could freeze the game during synthesis. Skipping a line cuts its audio instantly, so the client stays snappy even when players mash through dialogue.
          </p>

          <p>
            <strong>Latency and cost as first-class features.</strong> Spoken lines are cached in memory and persisted to disk, so repeats play instantly and free. Prefetch pre-voices the dialogue options on screen so the chosen line starts the moment it is clicked. Cloud calls retry transient failures with backoff, and a per-line cost of roughly $0.0025 is documented up front so players know exactly what they are paying.
          </p>

          <p>
            <strong>Security thinking for LLM-backed features.</strong> Dialogue text and player chat flow into a generative model, and players can type anything. The plugin ships an always-on offline profanity filter and a prompt-injection guard, so hostile input in public chat cannot hijack the synthesis prompt.
          </p>

          <p>
            <strong>A data pipeline for casting 13,700 voices.</strong> Voice assignment is driven by a generated lookup table built from OSRS Wiki and game cache data, layered so an unknown NPC still gets a sensible race-and-gender-matched voice while iconic characters get bespoke profiles on top. An auto-learn mode works out who new NPCs are when the game updates, and overrides patch individual fields rather than replacing whole profiles.
          </p>

          <p>
            <strong>Release engineering that survived real failures.</strong> The release pipeline computes semantic versions from tags, publishes changelogs based on the last deployed tag, and pins versions on tag-only commits so releases work against a protected main branch. Each of those properties exists because a release actually failed without it, and each failure became an issue, a fix, and a regression-proofed pipeline.
          </p>
        </section>

        <section class="case-study__section">
          <h2>Running a Live Plugin</h2>
          <p>
            Publishing was the start, not the finish. The plugin currently has more than 150 active users, and the feedback loop with them drives the roadmap. One player opened an issue saying "I love the plugin, the only reason I cannot really use it for all quests at the moment is the slow loading times." Another added they would "love to see the streaming feature get implemented" and thanked us for the work. That thread became the priority: I instrumented time-to-first-audio-chunk, shared honest measurements in the open, and shipped streaming playback so lines start speaking as audio arrives instead of waiting for the full clip.
          </p>
          <p>
            The community contributes code too. The streaming playback implementation itself came from a community pull request, which I reviewed, benchmarked, and merged, and another contributor has opened a series of feature and hardening PRs that I review with detailed, constructive feedback. Since launch the plugin has shipped four releases and kept pace with the game itself, voicing new quest content like The Blood Moon Rises and the Wyrmscraig island cast within days of their arrival, adding child-appropriate voices for child NPCs, and adding Google AI Studio as a second provider so players can bring their own Gemini API key.
          </p>
        </section>

        <section class="case-study__section">
          <h2>The Agentic AI Workflow</h2>
          <p>
            Voiced Dialogue is developed with an agentic AI workflow built on Claude Code, with every change flowing through pull requests that I review and direct. The repository encodes its own engineering processes as reusable agent skills: building and testing, filing issues, opening PRs, resolving NPC IDs from the game cache, and publishing a version end to end, from GitHub release through to the Plugin Hub update PR.
          </p>
          <p>
            The division of labor is deliberate. The AI implements; I own the architecture, the product judgment, and the review bar. The pivot from local engines to a cloud-only design, the decision to treat prompt injection as a real threat, and the calls on what feedback to ship first are all senior engineering judgment, executed at a pace that only an agentic workflow makes possible.
          </p>
        </section>

        <section class="case-study__section">
          <h2>Tech Stack &amp; Architecture</h2>
          <dl class="case-study__dl">
            <dt>Language</dt>
            <dd>Java, compiling under the Plugin Hub's Java 11 standard build</dd>
            <dt>Platform</dt>
            <dd>RuneLite client API, distributed via the RuneLite Plugin Hub</dd>
            <dt>Synthesis</dt>
            <dd>Gemini TTS via OpenRouter or Google AI Studio, behind a provider-agnostic backend interface with streaming support</dd>
            <dt>Voice data</dt>
            <dd>Generated NPC voice lookup table from OSRS Wiki and game cache data, layered with over 6,400 hand-written character profiles</dd>
            <dt>Performance</dt>
            <dd>Off-thread synthesis and playback, streaming first-chunk playback, in-memory LRU cache, persistent on-disk cache, predictive prefetch</dd>
            <dt>Safety</dt>
            <dd>Always-on offline profanity filtering and prompt-injection guarding</dd>
            <dt>Testing</dt>
            <dd>JUnit with parameterized, data-provider-driven test suites</dd>
            <dt>CI/CD</dt>
            <dd>GitHub Actions with split CI and release workflows, semver from tags, changelog generation, and automated Plugin Hub update PRs</dd>
          </dl>
        </section>

        <section class="case-study__section">
          <h2>Outcomes</h2>
          <ul>
            <li>Published on the RuneLite Plugin Hub with more than 150 active users</li>
            <li>Over 13,700 NPCs voiced, with 6,400+ hand-written character profiles across 13 races and 14 regional origins</li>
            <li>Four releases since launch, with community pull requests merged and player-reported issues shipped as fixes</li>
            <li>More than 120 merged pull requests and as many tracked issues of documented engineering history, open under MIT at grabartley/runelite-voiced-dialogue</li>
          </ul>
        </section>

        <section class="case-study__section">
          <h2>What's Next</h2>
          <p>
            The plugin is in active development and support. Near-term work includes upgrading to the GA release of the underlying TTS model when it lands, continuing to voice new game content as Jagex ships it, and further latency work on top of the streaming foundation. The longer arc is simple: keep the world talking, and keep listening to the players who use it.
          </p>
        </section>

        <section class="case-study__section case-study__section--links">
          <h2>Links</h2>
          <div class="case-study__links">
            <a
              href="https://github.com/grabartley/runelite-voiced-dialogue"
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
              href="https://runelite.net/plugin-hub/show/voiced-dialogue"
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
              Install from the Plugin Hub
            </a>
            <a
              href="https://github.com/grabartley/runelite-voiced-dialogue/releases"
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
import banner from '@/assets/projects/voiced-dialogue-banner.svg';

export default {
  name: 'VoicedDialogue',
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
