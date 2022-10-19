<template>
  <div class="castle-escape">
    <div class="text-section">
      <div class="text-section-title">Castle Escape</div>
      <div class="text-section-content">
          I wrote my first small open source <strong>text-based adventure-puzzle game</strong> in C++ called <a href="https://github.com/grabartley/castle-escape" target="_blank" rel="noreferrer nofollow">Castle Escape</a>!
          This was written in my spare time after my second year of B.Sc. study and I have since re-written the game in Java.
          Both versions are played on the terminal.
          The <a href="https://github.com/grabartley/castle-escape-java" target="_blank" rel="noreferrer nofollow">Java version</a> is <strong>available below</strong> and the source code for both can be found on my GitHub profile.
          <br><br>
          <center><img src="../assets/castle-escape-logo.png" alt="The icon for Castle Escape"></center>
          <br>
          <i>"The game begins in the old sewers of a castle and takes you on a journey through the castle's many twists and turns
          as you search for a way out while learning more and more about your surroundings.
          You can collect useful items along the way which may help you to escape and uncover more of the castle."</i>
          <br><br><strong>- Castle Escape's description</strong>
          <br><br>
          <div class="download-links">
            <a title="Download the Java version of Castle Escape" href="https://github.com/grabartley/castle-escape-java/releases/download/v1.0.0/castleescape.jar" download rel="noreferrer nofollow"><img class="link-bubble" src="../assets/download-logo.png"></a>
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
