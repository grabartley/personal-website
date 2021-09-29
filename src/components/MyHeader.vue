<template>
  <header id="header" class="skew-11-neg">
    <div id="header__content">
      <ul id="header__content-nav-list">
        <li><router-link id="header__content-bio" to="/">BIO</router-link></li>
        <li><router-link id="header__content-work" to="work">WORK</router-link></li>
      </ul>
      <h1 id="header__content-name">Graham Bartley</h1>
      <p id="header__content-desc">Full Stack Software Engineer | 1:1 B.Sc. (Hons.) in Computer Applications</p>
    </div>
  </header>
</template>
<script>
  export default {
    name: 'my-header',
  };
</script>
<style lang="less">
  @import "../common/colors";

  #header {
    margin: 0px;
    background-image: linear-gradient(45deg, @primary-green, @secondary-green);
    padding: 0 0 10% 0;
    &__content {
      &-name {
        font-size: 5em;
        text-transform: uppercase;
        margin: 0;
        padding: 13% 0 0 0;
      }
      &-desc {
        font-size: 1.3em;
        font-weight: bold;
        text-transform: uppercase;
      }
      &-nav-list {
        list-style-type: none;
        margin: 0;
        padding: 2.3% 3% 0 0;
        float: right;
        & li {
          display: inline;
          margin: 8px;
          & a {
            padding-top: 2px;
            font-size: 1.2em;
            text-decoration: none;
            color: @vue-default-text;
            transition: border-top 0.2s;
            &:hover {
              border-top: solid 3px;
            }
          }
        }
      }
    }
  }
</style>
