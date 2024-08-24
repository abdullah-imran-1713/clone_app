<template>
  <div>
    <nav class="nav-css d-flex align-items-center justify-content-between w-100">
      <div class="d-flex align-items-center">
        <img :class="{'ps-3' :isFacebookLogoVisible,'d-none' :!isFacebookLogoVisible}" src="/assets/images/facebook-logo.png" />
        <button class="border-0 bg-transparent" type="button" @click="toggleBackDefault">
          <Icon :class="{'back-arrow' :!isFacebookLogoVisible, 'd-none' :isFacebookLogoVisible}" name="material-symbols:arrow-left-alt-rounded" color="grey"/>
        </button>
        <div :class="{ 'search-wrapper': isSearchWrapperVisible, 'd-none': !isSearchWrapperVisible }">
          <Icon :class="{ 'search-icon': isSearchWrapperVisible, 'd-none': !isSearchWrapperVisible }" name="material-symbols:search" color="grey" />
          <AppRoundedInput :class="{ 'd-none': !isSearchWrapperVisible }" placeholder="Search Facebook" />
        </div>
        <button class=" p-0 border-0 bg-transparent" type="button" @click="toggleSearchWrapper">
          <Icon :class="{ 'search-icon-2': !isSearchWrapperVisible, 'd-none': isSearchWrapperVisible }" name="material-symbols:search" color="grey" />
        </button>
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
import { ref, onMounted, onUnmounted } from 'vue';

const isSearchWrapperVisible = ref(true);
const isFacebookLogoVisible = ref(true);

const checkScreenSize = () => {
  
    isSearchWrapperVisible.value = window.innerWidth > 768;
  
};

const toggleSearchWrapper = () => {
    isSearchWrapperVisible.value=true;
    isFacebookLogoVisible.value=false;

};

const toggleBackDefault = () => {

  isFacebookLogoVisible.value=true;
  isSearchWrapperVisible.value=false;


}

onMounted(() => {
  
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  
});

onUnmounted(() => {
  
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

.search-icon {
  position: absolute;
  left: 10px;
}
.search-icon-2 {
  font-size: 30px;
  font-weight: bold; 
}

.back-arrow
{
  font-size: 30px;
}

</style>
