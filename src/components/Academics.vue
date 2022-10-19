<template>
  <div class="academics">
    <zen></zen>
    <scripter></scripter>
    <draughts></draughts>
  </div>
</template>

<script>
  import Zen from '@/components/Zen';
  import Scripter from '@/components/Scripter';
  import Draughts from '@/components/Draughts';

  export default {
    name: 'academics',
    components: {
      zen: Zen,
      scripter: Scripter,
      draughts: Draughts,
    },
  };
</script>

<style scoped lang="less">
  @import "../common/colors";


</style>
