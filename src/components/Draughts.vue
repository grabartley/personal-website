<template>
  <div class="draughts">
    <div class="text-section">
      <div class="text-section-title">Ancient Brain Draughts Game</div>
      <div class="text-section-content">
        As part of my studies at <a href="https://www.dcu.ie/" target="_blank">DCU</a> I created a basic draughts game using JavaScript with the <a href="https://threejs.org/" target="_blank">Three.js</a> library. I wrote this as a submission to a website created by a <a href="http://computing.dcu.ie/~humphrys/" target="_blank">lecturer of mine</a> called <a href="https://ancientbrain.com/" target="_blank">Ancient Brain</a> which allows people to share coding projects in the form of "Worlds" and "Minds". The game can be played using the embed below!
        <br><br>
        <iframe   style='width:60vw; height:40vw; border:1px solid black;' scrolling=no src='https://ancientbrain.com/embed.php?mind=5349637596&world=8392146989'></iframe>
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
    background-color: @secondary-green;
    padding: 1% 0 1% 0;
  }
</style>