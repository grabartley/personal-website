<template>
  <div class="external-profile-links">
    <a href="https://ie.linkedin.com/pub/graham-bartley/ba/590/511" target="_blank"><img class="link-bubble" src="../assets/linkedin-logo.png"></img></a>
    <a href="https://github.com/grabartley" target="_blank"><img class="link-bubble" src="../assets/github-logo.png"></img></a>
    <a href="https://twitter.com/grahambartley" target="_blank"><img class="link-bubble" src="../assets/twitter-logo.png"></img></a>
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
    background-color: @secondary-green;
    padding: 10% 0 10% 0;
  }
</style>
