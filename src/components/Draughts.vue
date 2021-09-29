<template>
  <div class="draughts skew-11-neg">
    <div class="text-section">
      <div class="text-section-title">Ancient Brain Draughts Game</div>
      <div class="text-section-content">
        As part of my studies at <a href="https://www.dcu.ie/" target="_blank">DCU</a> I created a basic draughts game using JavaScript with the <a href="https://threejs.org/" target="_blank">Three.js</a> library. I wrote this as a submission to a website created by <a href="http://computing.dcu.ie/~humphrys/" target="_blank">Dr. Mark Humphrys</a> called <a href="https://ancientbrain.com/" target="_blank">Ancient Brain</a> which allows people to share coding projects in the form of "Worlds" and "Minds". The game can be played <a href="http://run.ancientbrain.com/run.php?world=8392146989&mind=5349637596" target="_blank">here on Ancient Brain</a>!
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'draughts',
  };
</script>

<style scoped lang="less">
  @import "../common/colors";

  .draughts {
    background-image: linear-gradient(45deg, @primary-green, @secondary-green);
    padding: 1% 0 1% 0;
  }
</style>