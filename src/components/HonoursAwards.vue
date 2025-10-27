<template>
  <section
    id="honours"
    class="honours section"
  >
    <div class="honours__container">
      <h2 class="section__title">
        Honours & Awards
      </h2>
      
      <div class="honours__grid">
        <div
          v-for="award in awards"
          :key="award.title"
          class="honor-card glass"
        >
          <div class="honor-card__icon">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 class="honor-card__title">
            {{ award.title }}
          </h3>
          <p class="honor-card__organization">
            {{ award.organization }}
          </p>
          <p
            v-if="award.description"
            class="honor-card__description"
          >
            {{ award.description }}
          </p>
          <div class="honor-card__date">
            {{ award.date }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HonoursAwards',
  data() {
    return {
      awards: [
        {
          title: 'PwC Best Practicum Award',
          organization: 'PwC',
          description: 'Recipient of the DCU M.Sc. Computing Best Practicum Award by PwC for the top grade thesis across all majors (140+ students) that year',
          date: '2024',
        },
        {
          title: 'Deputy Paranoid Success Story',
          organization: 'Yahoo',
          description: 'Recognised for my efforts as a "Deputy Paranoid" (security influencer) within Yahoo',
          date: '2023',
        },
        {
          title: 'DSP Hackday Winner',
          organization: 'Yahoo',
          description: 'First place in internal hackathon for re-writing a critical component of Yahoo DSP with an upgraded technical stack',
          date: '2022',
        },
        {
          title: 'Momentum Drivers Award',
          organization: 'Yahoo',
          description: 'Rapid prototyping and presentation of a greenfield feature concept for Yahoo DSP resulting in first place in the internal competition',
          date: '2020',
        },
        {
          title: 'Tech Pulse Conference Presenter',
          organization: 'Yahoo',
          description: 'Presented novel Digital-Out-Of-Home (DOOH) advertising system whitepaper at Tech Pulse industry conference in Sunnyvale, California',
          date: '2019',
        },
      ],
    };
  },
};
</script>

<style scoped>
.honours {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.honours__container {
  max-width: 1200px;
  margin: 0 auto;
}

.section__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.honours__grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
}

.honor-card {
  flex: 0 0 300px;
  padding: 2rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  text-align: center;
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

.honor-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.honor-card__icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 50%;
  color: white;
}

.honor-card__icon svg {
  width: 30px;
  height: 30px;
}

.honor-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.honor-card__organization {
  font-size: 1rem;
  color: var(--accent-secondary);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.honor-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.honor-card__date {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 968px) {
  .honor-card {
    flex: 0 0 calc(50% - 1rem);
    min-width: 280px;
  }
}

@media (max-width: 768px) {
  .honours {
    padding: 4rem 1rem;
  }
  
  .honor-card {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>

