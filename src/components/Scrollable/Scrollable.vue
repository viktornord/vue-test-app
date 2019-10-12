<template>
    <div class="scrollable" :style="`height: ${height}px`">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'Scrollable',
    props: {
      height: {
        type: Number,
        default: 300
      }
    }
  };
</script>

<style scoped>
    .scrollable {
        border: 2px solid;
        overflow-y: auto;
    }
</style>
