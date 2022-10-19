<template>
  <footer id="footer">
    <p>Graham Bartley {{currentYear}} - Hosted by <a href="https://pages.github.com/" target="_blank" rel="noreferrer nofollow">GitHub Pages</a></p>
  </footer>
</template>
<script>
  export default {
    name: 'my-footer',
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  };
</script>
<style lang="less">
  @import "../common/colors";
  #footer {
    padding: 10% 0 1% 0;
  }
</style>
