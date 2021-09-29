<template>
  <div class="external-profile-links skew-11-neg">
    <div class="external-profile-links__content">
      <a href="https://ie.linkedin.com/pub/graham-bartley/ba/590/511" target="_blank"><img class="link-bubble" src="../assets/linkedin-logo.png"></a>
      <a href="https://github.com/grabartley" target="_blank"><img class="link-bubble" src="../assets/github-logo.png"></a>
      <a href="https://twitter.com/grahambartley" target="_blank"><img class="link-bubble" src="../assets/twitter-logo.png"></a>
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
