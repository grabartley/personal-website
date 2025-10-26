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
            I'm a Senior Software Engineer working as a Technical Lead at 
            <a
              href="https://www.linkedin.com/company/yahoo/"
              target="_blank"
              rel="noreferrer nofollow"
            >Yahoo</a>. 
            I'm also studying part-time for my 
            <a
              href="https://www.dcu.ie/courses/postgraduate/school-computing/msc-computing-major-options"
              target="_blank"
              rel="noreferrer nofollow"
            >M.Sc. in Secure Software Engineering</a> 
            at <a
              href="https://dcu.ie/"
              target="_blank"
              rel="noreferrer nofollow"
            >Dublin City University</a> which I started in 2022. 
            Before starting at Yahoo, I completed my 
            <a
              href="https://www.dcu.ie/courses/undergraduate/computing/computer-applications.shtml"
              target="_blank"
              rel="noreferrer nofollow"
            >B.Sc. in Computer Applications</a> 
            with a first class honours result in 2018.
          </p>
          
          <p class="about__passion">
            I am passionate about building high quality software solutions in agile teams.
            I believe in life-long learning.
          </p>
          
          <div class="about__links">
            <ExternalProfileLinks />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExternalProfileLinks from '@/components/ExternalProfileLinks.vue';

export default {
  name: 'About',
  components: {
    ExternalProfileLinks,
  },
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

