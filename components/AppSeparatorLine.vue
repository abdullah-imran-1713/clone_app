<template>
  <div class="separator" :style="{ backgroundColor: color }"></div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'default'
  }
});
</script>

<style scoped>
.separator {
  width: 100%;
  height: 1px;
}
</style>
