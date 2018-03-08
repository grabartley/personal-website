<template>
  <div class="work">
    <zen></zen>
    <scripter></scripter>
    <castle-escape></castle-escape>
    <draughts></draughts>
  </div>
</template>

<script>
  import Zen from '@/components/Zen';
  import Scripter from '@/components/Scripter';
  import CastleEscape from '@/components/CastleEscape';
  import Draughts from '@/components/Draughts';

  export default {
    name: 'work',
    components: {
      zen: Zen,
      scripter: Scripter,
      'castle-escape': CastleEscape,
      draughts: Draughts,
    },
  };
</script>

<style scoped lang="less">
  @import "../common/colors";


</style>
