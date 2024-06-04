<template>
    <div v-if="show" class="app-modal-overlay">
      <div class="app-modal">
        <!-- <div class="app-modal-header"> -->
          
          
        <!-- </div> -->
        <div class="app-modal-body">
          <button class="close-btn" @click="closeModal">×</button>
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        default: 'Modal Title'
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
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
  
  .app-modal-body
  {
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
  
  /* .app-modal-footer {
    margin-top: 20px;
    text-align: right;
  } */
  </style>
  