<template>
  <div class="hobbies">
    <castle-escape></castle-escape>
  </div>
</template>

<script>
  import CastleEscape from '@/components/CastleEscape';

  export default {
    name: 'academics',
    components: {
      'castle-escape': CastleEscape,
    },
  };
</script>

<style scoped lang="less">
  @import "../common/colors";

</style>
