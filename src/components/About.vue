<template>
  <section
    id="about"
    class="about section"
  >
    <div class="about__container">
      <h2 class="section__title">
        About Me
      </h2>
      
      <div class="about__content">
        <div class="about__image-container">
          <img 
            src="@/assets/me.png" 
            alt="Graham Bartley" 
            class="about__image"
          >
        </div>
        
        <div class="about__text">
          <p class="about__intro">
            I'm a Senior Software Engineer and Squad Lead at 
            <a
              href="https://www.yahooinc.com/"
              target="_blank"
              rel="noreferrer nofollow"
            >Yahoo</a>, 
            delivering scalable, high-performance systems that are core to our advertising platform. 
            I work across the stack with a focus on backend architecture, distributed systems, 
            and building reliable, maintainable services in production.
          </p>
          
          <p class="about__intro">
            I hold a First Class Honours 
            <a
              href="https://www.dcu.ie/courses/postgraduate/school-computing/msc-computing-major-options"
              target="_blank"
              rel="noreferrer nofollow"
            >M.Sc. in Computing</a> from 
            <a
              href="https://dcu.ie/"
              target="_blank"
              rel="noreferrer nofollow"
            >Dublin City University</a> (2022-2024). 
            My thesis on <em>The Impact of Verification Feedback on Code Correctness in LLM-Generated Dafny Programs</em> 
            achieved the highest grade across all M.Sc. majors and was subsequently recognised by PwC's Best Practicum award.
          </p>
          
          <p class="about__passion">
            I bring a pragmatic, delivery-focused mindset to solving complex, high-impact problems. 
            I'm particularly interested in how recent advances in AI models can enhance software solutions when used safely and correctly.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
.about {
  padding: 6rem 2rem;
  background: var(--bg-secondary);
}

.about__container {
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

.about__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.about__image-container {
  position: relative;
}

.about__image {
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  box-shadow: var(--shadow-xl);
  transition: transform 0.3s ease;
}

.about__image:hover {
  transform: scale(1.05);
}

.about__text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about__intro,
.about__passion {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about__intro a,
.about__passion a {
  color: var(--accent-primary);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.about__intro a:hover,
.about__passion a:hover {
  border-bottom-color: var(--accent-primary);
}

.about__passion {
  font-style: italic;
  font-size: 1.25rem;
  color: var(--text-primary);
}

.about__links {
  margin-top: 2rem;
}

@media (max-width: 968px) {
  .about__content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .about__image-container {
    justify-self: center;
  }
  
  .about__text {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 4rem 1rem;
  }
  
  .about__content {
    gap: 2rem;
  }
}
</style>

