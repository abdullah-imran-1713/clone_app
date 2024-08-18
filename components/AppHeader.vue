<template>
    <div>
      <nav class="nav-css d-flex align-items-center justify-content-between w-100">
        <div class="d-flex align-items-center">
          <Icon v-if="isSearchExpanded && isSmallScreen" class="back-arrow-icon" name="material-symbols:arrow-back" color="grey" @click="toggleSearch" />
          <img v-if="!isSearchExpanded || !isSmallScreen" class="ps-3" src="/assets/images/facebook-logo.png" />
          <div class="search-wrapper" :class="{'d-none': !isSearchExpanded && isSmallScreen}">
            <AppRoundedInput placeholder="Search Facebook" />
            <Icon class="search-icon" name="material-symbols:search" color="grey" />
          </div>
          <Icon v-if="!isSearchExpanded && isSmallScreen" class="search-icon-toggle" name="material-symbols:search" color="grey" @click="toggleSearch" />
        </div>
        <!-- Messenger and DP Section -->
        <div class="d-flex align-items-center me-2">
          <div class="messenger-icon-div d-flex justify-content-center mt-1 mb-1">
            <Icon class="messenger-icon-css pb-1" name="mdi:facebook-messenger" color="lightgrey" />
          </div>
          <img class="profile-display-css ps-1 mt-1 mb-1" src="/assets/images/no-disp.png" />
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isSearchExpanded = ref(false);
  const isSmallScreen = ref(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  
  const toggleSearch = () => {
    isSearchExpanded.value = !isSearchExpanded.value;
  };
  
  const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 768;
    if (!isSmallScreen.value) {
      isSearchExpanded.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('resize', checkScreenSize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
  </script>
  
  <style scoped>
  .nav-css {
    background-color: rgb(43, 42, 42);
    height: 55px;
    display: flex;
    align-items: center;
  }
  
  .search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  
  .search-icon {
    position: absolute;
    left: 10px;
  }
  
  .search-icon-toggle,
  .back-arrow-icon {
    cursor: pointer;
    font-size: 24px;
    margin-left: 10px;
  }
  
  .messenger-icon-div {
    border: 2px solid rgb(71, 71, 71);
    border-radius: 50%;
    height: 45px;
    width: 45px;
    background-color: rgb(71, 71, 71);
  }
  
  .messenger-icon-css {
    height: 45px;
    width: 30px;
  }
  
  .profile-display-css {
    width: 50px;
    height: 45px;
  }
  
  .d-none {
    display: none !important;
  }
  </style>
  