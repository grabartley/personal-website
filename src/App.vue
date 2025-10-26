<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Light theme colors */
  --bg-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --bg-secondary: #f8fafc;
  --bg-glass: rgba(255, 255, 255, 0.1);
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  --border-color: rgba(0, 0, 0, 0.1);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --bg-primary: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  --bg-secondary: #0f172a;
  --bg-glass: rgba(255, 255, 255, 0.05);
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --border-color: rgba(255, 255, 255, 0.1);
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-primary: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    --bg-secondary: #0f172a;
    --bg-glass: rgba(255, 255, 255, 0.05);
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --border-color: rgba(255, 255, 255, 0.1);
  }
}

html,
body {
  height: 100%;
  overflow-x: hidden;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  width: 100%;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-primary);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--accent-secondary);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Glass effect utility */
.glass {
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
