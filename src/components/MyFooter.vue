<template>
  <footer id="footer">
    <p>© Graham Bartley 2018 - Hosted by <a href=" https://redbrick.dcu.ie/" target="_blank">Redbrick</a></p>
  </footer>
</template>
<script>
  export default {
    name: 'my-footer',
  };
</script>
<style lang="less">
  @import "../common/colors";
  #footer {
    padding: 1% 0 1% 0;
    background-color: @secondary-green;
  }
</style>
