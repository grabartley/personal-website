<template>
  <div id="app">
    <my-header></my-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader';
  import MyFooter from '@/components/MyFooter';

  export default {
    name: 'app',
    components: {
      'my-header': MyHeader,
      'my-footer': MyFooter,
    },
  };
</script>

<style lang="less">
  @import "./common/colors";

  html, body {
    margin: 0;
    height: 100%;
    background-color: @white-green;
    color: @vue-default-text;
  }
  a {
    text-decoration: none;
    color: @link-green;
    transition: color 0.3s;
    &:hover {
      color: @primary-purple;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .router-link-exact-active {
    border-top: solid 3px;
  }
  .text-section {
    margin-top: 10%;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 10%;
    &-title {
      font-size: 2.5em;
      font-weight: bold;
      padding: 0 0 5% 0;
    }
    &-content {
      font-size: 1.6em;
      line-height: 40px;
    }
  }
  .link-bubble {
    width: 230px;
    margin-left: 2%;
    margin-right: 2%;
    border-style: solid;
    border-radius: 10em;
    border-width: 17px;
    border-color: @primary-green;
    transition: border-color 0.5s;

    &:hover {
      border-color: @primary-purple;
    }
  }
  // styling for router-view fade
  .fade {
    &-enter {
      opacity: 0;
      &-active {
        transition-property: opacity;
        transition-duration: .15s;
        transition-delay: .15s;
      }
    }
    &-leave-active {
      transition-property: opacity;
      transition-duration: .15s;
      opacity: 0;
    }
  }
  // styling for skews (diagonals)
  .skew-11-neg {
    transform: skewY(-11deg);
    & > div {
      transform: skewY(11deg);
    }
  }
</style>
