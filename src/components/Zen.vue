<template>
  <div class="zen">
    <div class="text-section">
      <div class="text-section-title">CoderDojo Zen Platform</div>
      <div class="text-section-content">
        During my internship with <a href="https://coderdojo.com/foundation/" target="_blank" rel="noreferrer nofollow">the CoderDojo Foundation</a> I developed new features and pages for <a href="https://zen.coderdojo.com" target="_blank" rel="noreferrer nofollow">Zen</a>.
        I mainly worked on the <a href="https://www.github.com/CoderDojo/cp-zen-frontend" target="_blank" rel="noreferrer nofollow">new front-end</a> which was partly redesigned and rewritten using the
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer nofollow">VueJS framework</a> while I was there but I also worked on the <a href="https://github.com/CoderDojo/cp-zen-platform" target="_blank" rel="noreferrer nofollow">older front-end</a>
        using <a href="https://angularjs.org/" target="_blank" rel="noreferrer nofollow">Angular 1</a> and the back-end microservices using <a href="https://nodejs.org/" target="_blank" rel="noreferrer nofollow">NodeJS</a> and <a href="https://senecajs.org/" target="_blank" rel="noreferrer nofollow">SenecaJS</a>.
        I documented my experience in more detail in <a href="https://coderdojo.com/2017/10/25/what-ive-learned-and-am-still-learning-at-the-coderdojo-foundation" target="_blank" rel="noreferrer nofollow">this blog post</a>.
        Zen is an <strong>open source</strong> platform so all of it's source code can be found on <a href="https://www.github.com/CoderDojo" target="_blank" rel="noreferrer nofollow">CoderDojo's GitHub</a>.
        <br><br><img src="../assets/coderdojo-zen-logo.png">
        <br><br>The work I did during my internship led to me wanting to <strong>continue contributing</strong> to the development of Zen which I was able to do through <a href="https://github.com/grabartley/coderdojo-zen-projects" target="_blank" rel="noreferrer nofollow">my final year project</a> in my final year of studying for my B.Sc. at <a href="https://www.dcu.ie/" target="_blank" rel="noreferrer nofollow">DCU</a>.
        This individual project focused on the <strong>design, testing and implementation</strong> of a coding project creation, management and interaction solution for Zen which allows CoderDojo Ninjas to upload, share and interact with coding projects directly through Zen without ever leaving their browser.
        This was a <strong>very challenging</strong> and <strong>very rewarding</strong> project to work on and I am delighted to have been able to complete it.
        <br><br>
        <video id="ca400-video-walkthrough" controls>
          <source src="../assets/ca400-video-walkthrough.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zen',
  };
</script>

<style scoped lang="less">
  @import "../common/colors";

  #ca400-video-walkthrough {
    width: 80%;
    &:focus {
      outline: none;
    }
  }
</style>
