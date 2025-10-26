<template>
  <section
    id="contact"
    class="contact section"
  >
    <div class="contact__container">
      <h2 class="section__title">
        Get In Touch
      </h2>
      
      <div class="contact__content">
        <p class="contact__text">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div class="contact__links">
          <a 
            href="https://ie.linkedin.com/pub/graham-bartley/ba/590/511" 
            target="_blank" 
            rel="noreferrer nofollow"
            class="contact__link glass"
          >
            <svg
              class="contact__icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/grabartley" 
            target="_blank" 
            rel="noreferrer nofollow"
            class="contact__link glass"
          >
            <svg
              class="contact__icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      
      <footer class="contact__footer">
        <p>&copy; {{ currentYear }} Graham Bartley</p>
        <p class="contact__footer-small">
          Hosted by <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noreferrer nofollow"
          >GitHub Pages</a>
        </p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 6rem 2rem 4rem;
  background: linear-gradient(to bottom, var(--bg-secondary), #000);
  color: rgba(255, 255, 255, 0.9);
}

.contact__container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact__text {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact__links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact__link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
  border-color: rgba(99, 102, 241, 0.5);
}

.contact__icon {
  width: 24px;
  height: 24px;
}

.contact__footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

.contact__footer-small {
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.contact__footer a {
  color: var(--accent-primary);
  text-decoration: none;
}

.contact__footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 1rem 3rem;
  }
  
  .contact__links {
    flex-direction: column;
    align-items: stretch;
  }
  
  .contact__link {
    justify-content: center;
  }
}
</style>

