<template>
  <div class="profile-links">
    <a 
      title="LinkedIn" 
      href="https://ie.linkedin.com/pub/graham-bartley/ba/590/511" 
      target="_blank" 
      rel="noreferrer nofollow"
      class="profile-links__link"
    >
      <img 
        src="@/assets/linkedin-logo.png" 
        alt="LinkedIn"
        class="profile-links__icon"
      >
    </a>
    <a 
      title="GitHub" 
      href="https://github.com/grabartley" 
      target="_blank" 
      rel="noreferrer nofollow"
      class="profile-links__link"
    >
      <img 
        src="@/assets/github-logo.png" 
        alt="GitHub"
        class="profile-links__icon"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: 'ExternalProfileLinks',
};
</script>

<style scoped>
.profile-links {
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
}

.profile-links__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.profile-links__link:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: var(--shadow-xl);
}

.profile-links__icon {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {
  .profile-links {
    justify-content: center;
  }
}
</style>
