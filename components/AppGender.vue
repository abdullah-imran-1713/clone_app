<template>
  <div class="gender-option">
    <input
      type="radio"
      :id="label"
      :value="label"
      :checked="isChecked"
      @change="handleChange"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  selectedGender: {
    type: String,
    required: true
  }
});

const isChecked = computed(() => {
  return props.selectedGender === props.label;
});

const handleChange = () => {
  emit('update:selectedGender', props.label);
};
</script>

<style scoped>
.gender-option {
  display: flex;
  align-items: center;
  margin: 5px 0;
}

input[type="radio"] {
  margin-right: 10px;
}
</style>
