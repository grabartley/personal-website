<template>
  <nav
    class="nav"
    :class="{ 'nav--scrolled': scrolled }"
  >
    <div class="nav__content">
      <span class="nav__logo" />
      
      <ul class="nav__links">
        <li>
          <button @click="scrollTo('about')">
            About
          </button>
        </li>
        <li>
          <button @click="scrollTo('experience')">
            Experience
          </button>
        </li>
        <li>
          <button @click="scrollTo('honors')">
            Honors
          </button>
        </li>
        <li>
          <button @click="scrollTo('projects')">
            Projects
          </button>
        </li>
        <li>
          <button @click="scrollTo('contact')">
            Contact
          </button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      
      <button 
        class="nav__mobile-toggle"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="nav__mobile-menu"
      >
        <button @click="scrollTo('about') && (mobileMenuOpen = false)">
          About
        </button>
        <button @click="scrollTo('experience') && (mobileMenuOpen = false)">
          Experience
        </button>
        <button @click="scrollTo('honors') && (mobileMenuOpen = false)">
          Honors
        </button>
        <button @click="scrollTo('projects') && (mobileMenuOpen = false)">
          Projects
        </button>
        <button @click="scrollTo('contact') && (mobileMenuOpen = false)">
          Contact
        </button>
        <div class="nav__mobile-theme">
          <ThemeToggle />
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import ThemeToggle from '@/components/ThemeToggle.vue';

export default {
  name: 'Navigation',
  components: {
    ThemeToggle,
  },
  setup() {
    const scrolled = ref(false);
    const mobileMenuOpen = ref(false);

    const handleScroll = () => {
      scrolled.value = window.scrollY > 50;
    };

    const scrollTo = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      scrolled,
      mobileMenuOpen,
      scrollTo,
    };
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

.nav--scrolled {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}

.nav__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.nav__logo:hover {
  transform: scale(1.1);
}

.nav__links {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav__links li button {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
}

.nav__links li button:hover {
  color: var(--accent-primary);
}

.nav__links li button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}

.nav__links li button:hover::after {
  width: 100%;
}

.nav__mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav__mobile-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.nav__mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-color);
  padding: 1rem;
}

.nav__mobile-menu button {
  display: block;
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.nav__mobile-menu button:hover {
  background: var(--bg-glass);
}

.nav__mobile-theme {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  margin-top: 0.5rem;
}

/* Animations */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .nav__links {
    display: none;
  }
  
  .nav__mobile-toggle,
  .nav__mobile-menu {
    display: block;
  }
  
  .nav {
    padding: 1rem;
  }
}
</style>

