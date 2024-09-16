<template>
  <div class="separator" :style="customStyle"></div>
</template>

<script setup>
const props = defineProps({
  customStyle: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>
.separator {
  /* Base styles (if any) */
}
</style>
