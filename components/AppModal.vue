<template>
  <div v-if="show" class="app-modal-overlay">
    <div class="app-modal">
      <!-- <div class="app-modal-header"> -->


      <!-- </div> -->
      <div class="app-modal-body">
        <button :class="['close-btn', computedButtonClass]" @click="closeModal">×</button>
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
      console.log({ value })
      // The value must match one of these strings
      const arrayValues = Object.values(CROSS_COLOR_TYPE);
      return arrayValues.includes(value);
    }
  },
});

function closeModal() {
  this.$emit('close');
}

const computedButtonClass = computed(() => {
  // const crossColorClasses = {
  //   [CROSS_COLOR_TYPE.DARK]: 'dark',
  //   [CROSS_COLOR_TYPE.LIGHT]: 'light'
  // };
  // return crossColorClasses[props.crossColor] || CROSS_COLOR_TYPE.LIGHT;

  return CROSS_COLOR_TYPE[props.crossColor?.toUpperCase()] || CROSS_COLOR_TYPE.LIGHT;
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

/* .app-modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
  } */

.app-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-modal-body {
  position: relative;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 20px;
}

.close-btn.dark {
  color: black;
}

.close-btn.light {
  color: #ffffff;
}

/* .app-modal-footer {
    margin-top: 20px;
    text-align: right;
  } */
</style>