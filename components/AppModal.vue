<template>
  <div v-if="show" class="app-modal-overlay">
    <div class="app-modal">
      <div class="app-modal-body">
        <button :class="['close-btn', computedButtonClass, closeButtonPosition]" @click="closeModal">×</button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { CROSS_COLOR_TYPE } from '~/utils/constants/general';

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  crossColor: {
    type: String,
    default: CROSS_COLOR_TYPE.LIGHT,
    validator(value) {
      const arrayValues = Object.values(CROSS_COLOR_TYPE);
      return arrayValues.includes(value);
    }
  },
  closeButtonPosition: {
    type: String,
    default: 'top-right',
    validator(value) {
      // The value must match one of these strings
      return ['top-right', 'top-right-colored'].includes(value);
    }
  }
});

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}

const computedButtonClass = computed(() => {
  return props.crossColor === CROSS_COLOR_TYPE.DARK ? 'dark' : 'light';
});
</script>

<style scoped>
.app-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.app-modal {
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.app-modal-body {
  position: relative;
}

.close-btn {
  background: none;
  border: none;
  
  cursor: pointer;
}

.close-btn.dark {
  color: black;
}

.close-btn.light {
  color: rgb(202, 202, 202);
}

.close-btn.top-right {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 80px;
  top: 20px;
}

.close-btn.top-right-colored {
  background: rgb(97, 96, 96);
  border: none;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  left: 460px;
  top: 10px;
  border-radius: 100px;
  width: 36px;
  height: 36px;
  
}
</style>
