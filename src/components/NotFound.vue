<template>
  <div class="not-found">
    <div class="not-found__message">
      <div class="not-found__message-title">
        404
      </div>
      <div class="not-found__message-subtitle">
        No page to be found here.
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NotFound',
  };
</script>
<style scoped lang="less">
  @import "../common/colors";
  
  .not-found {
    &__message {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10%;
      margin-left: 15%;
      margin-right: 15%;
      margin-bottom: 10%;
      &-title {
        font-size: 5em;
      }
      &-subtitle {
        margin-top: 20px;
        font-size: 1.3em;
      }
    }
  }
</style>