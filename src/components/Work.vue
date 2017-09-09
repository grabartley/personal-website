<template>
  <div class="work">
    <zen></zen>
    <scripter></scripter>
    <castle-escape></castle-escape>
  </div>
</template>

<script>
  import Zen from '@/components/Zen';
  import Scripter from '@/components/Scripter';
  import CastleEscape from '@/components/CastleEscape';

  export default {
    name: 'work',
    components: {
      zen: Zen,
      scripter: Scripter,
      'castle-escape': CastleEscape,
    },
  };
</script>

<style scoped lang="less">
  @import "../common/colors";


</style>
