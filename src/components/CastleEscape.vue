<template>
  <div class="castle-escape">
    <div class="text-section">
      <div class="text-section-title">Castle Escape</div>
      <div class="text-section-content">
          I wrote an open source <strong>text-based adventure-puzzle game</strong> in C++ called Castle Escape!
          This was written after my second year of college and I have since re-written the game in Java.
          The Java version is <strong>available below</strong> and the source code for both can be found on my GitHub profile.
          <br><br>
          <center><img src="../assets/castle-escape-logo.png" alt="The icon for Castle Escape"></img></center>
          <br>
          "The game begins in the old sewers of a castle and takes you on a journey through the castle's many twists and turns
          as you search for a way out while learning more and more about your surroundings.
          You can collect useful items along the way which may help you to escape and uncover more of the castle."<br><br><strong><i>- Castle Escape's description</i></strong>
          <br><br>
          <div class="download-links">
            <a href="http://redbrick.dcu.ie/~dedoctor/download/castleescape.jar" download><img class="link-bubble" src="../assets/download-logo.png"></img></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'castle-escape',
  };
</script>

<style scoped lang="less">
  @import "../common/colors";
  
  .download-links {
    padding: 4% 0 0 0;
  }
  .link-bubble {
    width: 120px;
    border-width: 10px;
    background-color: @primary-green;
  }
</style>
