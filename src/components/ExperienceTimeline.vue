<template>
  <section
    id="experience"
    class="experience section"
  >
    <div class="experience__container">
      <h2 class="section__title">
        Experience & Education
      </h2>
      
      <div class="timeline">
        <div 
          v-for="(item, index) in timelineItems" 
          :key="index"
          class="timeline__item"
        >
          <div class="timeline__marker glass" />
          <div class="timeline__card glass">
            <div class="timeline__period">
              {{ item.period }}
            </div>
            <h3 class="timeline__title">
              {{ item.title }}
            </h3>
            <p class="timeline__organization">
              {{ item.organization }}
            </p>
            <p
              v-if="item.description"
              class="timeline__description"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceTimeline',
  data() {
    return {
      timelineItems: [
        {
          period: 'Jan 2024 - Present',
          title: 'Senior Software Engineer (Squad Lead)',
          organization: 'Yahoo',
          description: 'Leading a feature squad within Ads Engineering, delivering reliable and performant solutions at scale. Working across the stack with equal parts frontend and backend focus.',
        },
        {
          period: 'Apr 2023 - Dec 2023',
          title: 'Software Dev Engineer II (Technical Lead)',
          organization: 'Yahoo',
          description: 'Leading technical initiatives and engineering teams',
        },
        {
          period: '2022 - 2024',
          title: '(1st) M.Sc. Computing',
          organization: 'Dublin City University',
          description: 'Secure Software Engineering major. Awarded best M.Sc. Computing Practicum by PwC across all majors (140+ students) in my year. Thesis: The Impact of Verification Feedback on Code Correctness in LLM-Generated Dafny Programs',
        },
        {
          period: 'Sep 2021 - Apr 2023',
          title: 'Software Dev Engineer II',
          organization: 'Yahoo',
          description: 'Full stack development across advertising platform',
        },
        {
          period: 'Aug 2021 - Sep 2021',
          title: 'Software Dev Engineer II',
          organization: 'Verizon Media',
          description: 'Transition role during company acquisition',
        },
        {
          period: 'Oct 2019 - Aug 2021',
          title: 'Software Dev Engineer I',
          organization: 'Verizon Media',
          description: 'Building scalable systems for media platforms',
        },
        {
          period: 'Aug 2018 - Sep 2019',
          title: 'Associate Software Dev Engineer',
          organization: 'Verizon Media',
          description: 'First role out of university, building full stack applications',
        },
        {
          period: 'Apr 2017 - Sep 2017',
          title: 'Software Engineering Intern',
          organization: 'CoderDojo Foundation',
          description: 'Full stack development of the CoderDojo community platform (Zen)',
        },
        {
          period: '2014 - 2018',
          title: '(1st) B.Sc. Computer Applications',
          organization: 'Dublin City University',
          description: 'First class honours, Software Engineering major',
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.experience__container {
  max-width: 1000px;
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
  border-radius: 3px;
}

.timeline__item {
  position: relative;
  padding-bottom: 3rem;
}

.timeline__marker {
  position: absolute;
  left: -1.75rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 3px solid var(--bg-secondary);
  box-shadow: var(--shadow-md);
}

.timeline__card {
  padding: 2rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: fadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

.timeline__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--accent-primary);
}

.timeline__period {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.timeline__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.timeline__organization {
  font-size: 1.125rem;
  color: var(--accent-secondary);
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.timeline__description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .experience {
    padding: 4rem 1rem;
  }
  
  .timeline {
    padding-left: 1.5rem;
  }
  
  .timeline::before {
    width: 2px;
  }
  
  .timeline__marker {
    left: -1.25rem;
    width: 10px;
    height: 10px;
  }
  
  .timeline__card {
    padding: 1.5rem;
  }
}
</style>

