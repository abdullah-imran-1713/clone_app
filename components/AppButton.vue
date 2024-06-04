<template>
    <div>
      <button id="btn" :class="computedButtonClass" :style="customStyle">
        <slot></slot>
      </button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    buttonType: {
      type: String,
      default: 'default',
      validator(value) {
        // The value must match one of these strings
        return ['default', 'primary'].includes(value);
      }
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  });
  
  const computedButtonClass = computed(() => {
    return {
      'btn-default': props.buttonType === 'default',
      'btn-primary': props.buttonType === 'primary'
    };
  });
  </script>
  
  <style scoped>
  #btn {
    padding: 0 16px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    line-height: 48px;
    transition: background-color 0.3s;
    font-weight: bold;
    margin: 15px 0;
  }
  
  #btn:hover {
    opacity: 0.9;
  }
  
  .btn-default {
    background-color: #0866ff;
    color: white;
    width: 100%;
  }
  
  .btn-primary {
    background-color: #42b72a;
    color: white;
    font-size: 16px;
  }
  </style>
  