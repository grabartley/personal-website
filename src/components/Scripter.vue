<template>
  <div class="scripter">
    <div class="text-section">
      <div class="text-section-title">Scripter</div>
      <div class="text-section-content">
        During my third year of college, I worked with a friend of mine to develop our <strong>first Android application</strong> named Scripter.
        It gives you <strong>greater control</strong> over your device by allowing you to explain <strong>simple logic</strong> in JavaScript
        which can be used to <strong>run tasks automatically</strong> in the background.
        <br><br>
        <center><img src="../assets/scripter-logo.png"></img></center>
        <br>
        For example, this short script could be used with Scripter to turn your device on silent mode when
        within 15 meters of the Googleplex building in California...
        <br><br>
        <img id="example-script" src="../assets/scripter-example-script.png"></img>
        <br><br>
        This is just one example of the many possible uses of Scripter!
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scripter',
  };
</script>

<style scoped lang="less">
  @import "../common/colors";

  .scripter {
    background-color: @secondary-green;
    padding: 1% 0 1% 0;
  }
  #example-script {
    width: 80%;
  }
</style>
