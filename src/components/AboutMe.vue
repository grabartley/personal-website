<template>
  <div class="about-me">
    <div class="text-section">
      <div class="text-section-title">Hi, I'm Graham</div>
      <div class="text-section-content">
        <div class="about-me__bio">
          <div class="about-me__bio-image">
            <img src="../assets/me.png" alt="A picture of me.">
          </div>
          <div class="about-me__bio-text">
            "I'm a Full Stack Software Engineer working at <a href="https://www.linkedin.com/company/verizon-media/" target="_blank">Verizon Media</a> since 2018. Before that I completed my <a href="https://www.dcu.ie/courses/undergraduate/computing/computer-applications.shtml" target="_blank">B.Sc. in Computer Applications</a> at <a href="http://dcu.ie/" target="_blank">Dublin City University</a> with a first class honours result.<br><br>
            I am passionate about building high quality software solutions through respectful collaboration with others."
          </div>
        </div>
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
  .about-me {
    &__bio {
      display: flex;
      &-text {
        margin-left: 45px;
        font-style: italic;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .about-me {
      &__bio {
        flex-direction: column;
        &-text {
          margin: 45px 0 0 0;
        }
      }
    }
  }
</style>
