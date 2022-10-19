<template>
  <div class="external-profile-links skew-11-neg">
    <div class="external-profile-links__content">
      <a title="LinkedIn" href="https://ie.linkedin.com/pub/graham-bartley/ba/590/511" target="_blank" rel="noreferrer nofollow"><img class="link-bubble" src="../assets/linkedin-logo.png"></a>
      <a title="GitHub" href="https://github.com/grabartley" target="_blank" rel="noreferrer nofollow"><img class="link-bubble" src="../assets/github-logo.png"></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'external-profile-links',
  };
</script>
<style scoped lang="less">
  @import "../common/colors";

  .external-profile-links {
    background-image: linear-gradient(45deg, @primary-green, @secondary-green);
    padding: 10% 0 10% 0;
  }
</style>
