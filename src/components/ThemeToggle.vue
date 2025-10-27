<template>
  <button 
    class="theme-toggle"
    :aria-label="`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`"
    @click="toggleTheme"
  >
    <svg
      v-if="currentTheme === 'light'"
      class="theme-toggle__icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
    <svg
      v-else
      class="theme-toggle__icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </button>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ThemeToggle',
  setup() {
    const currentTheme = ref('light');

    const setTheme = (theme) => {
      currentTheme.value = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    };

    const toggleTheme = () => {
      const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(theme);
    });

    return {
      currentTheme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.theme-toggle {
  background: var(--bg-glass);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.theme-toggle__icon {
  width: 20px;
  height: 20px;
  color: var(--text-primary);
}
</style>

