<template>
  <div class="bio">
    <div class="skew-11-neg">
      <div class="text-section">
        <div class="text-section-title">Hi, I'm Graham</div>
        <div class="text-section-content">
          <div class="bio__bio">
            <div class="bio__bio-image">
              <img src="../assets/me.png" alt="A picture of me.">
            </div>
            <div class="bio__bio-text">
              "I'm a Senior Software Engineer working as a Technical Lead at <a href="https://www.linkedin.com/company/yahoo/" target="_blank" rel="noreferrer nofollow">Yahoo</a>. I'm also studying part-time for my <a href="https://www.dcu.ie/courses/postgraduate/school-computing/msc-computing-major-options" target="_blank" rel="noreferrer nofollow">M.Sc. in Secure Software Engineering</a> at <a href="https://dcu.ie/" target="_blank" rel="noreferrer nofollow">Dublin City University</a> which I started in 2022. Before starting at Yahoo, I completed my <a href="https://www.dcu.ie/courses/undergraduate/computing/computer-applications.shtml" target="_blank" rel="noreferrer nofollow">B.Sc. in Computer Applications</a> with a first class honours result in 2018.<br><br>
              I am passionate about building high quality software solutions in agile teams.
              I believe in life-long learning."
            </div>
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
    name: 'bio',
    components: {
      'external-profile-links': ExternalProfileLinks,
    },
  };
</script>

<style scoped lang="less">
  .bio {
    &__bio {
      display: flex;
      &-image img {
        width: 300px;
        height: 423px;
        border-radius: 150px;
      }
      &-text {
        margin-left: 45px;
        font-style: italic;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .bio {
      &__bio {
        flex-direction: column;
        &-text {
          margin: 45px 0 0 0;
        }
      }
    }
  }
</style>
