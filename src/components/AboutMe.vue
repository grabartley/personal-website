<template>
  <div class="about-me">
    <div class="text-section">
      <div class="text-section-title">Hi, I'm Graham</div>
      <div class="text-section-content">
        I'm a final year student studying for a <strong>B.Sc. in Computer Applications</strong> at <a href="http://dcu.ie/" target="_blank">Dublin City University</a>.
        During the Summer of 2017, I spent six months interning as a Software Engineer with the <a href="https://coderdojo.com/foundation/" target="_blank">CoderDojo Foundation</a>
        where I worked on improving <a href="http://zen.coderdojo.com" target="_blank">Zen, the CoderDojo Community Platform</a>.<br><br>
        I'm an advocate of open source software and enjoy developing as a hobby as well as a career.
      </div>
    </div>
    <external-profile-links></external-profile-links>
  </div>
</template>

<script>
  import ExternalProfileLinks from '@/components/ExternalProfileLinks';

  export default {
    name: 'aboutMe',
    components: {
      'external-profile-links': ExternalProfileLinks,
    },
  };
</script>

<style scoped lang="less">

</style>
