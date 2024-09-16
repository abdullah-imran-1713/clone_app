<template>
    <div class="page-wrapper">
      <AppHeader />
      <div class="main-container d-flex">
        <div class="sidebar-container">
          <div class="fixed-uppersidebar">
            <AppFriendUpperSidebar class="pt-4" text="All Friends" />
          </div>
          <AppSeparatorLine :customStyle="{ backgroundColor: 'rgb(71, 71, 71)', width: '80%', height: '1px',marginLeft:'28px' }" />
          <!-- Scrollable Lower Sidebar -->
          <div class="scrollable-lowersidebar">
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
            <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" :fromlist="yes" />
          </div>
        </div>
        <div class="content-container d-flex justify-content-center position-relative">
          <AppPreviewProfile />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const apply = ref(false);
  const yes = ref(true);
  </script> 
  
  <style scoped>
  .page-wrapper {
    height: 100vh; /* Full height of the viewport */
    overflow: hidden; /* Prevent page scroll */
  }
  
  .main-container {
    display: flex;
    height: calc(100vh - 50px); /* Adjust this based on the height of your header */
    background-color: rgb(34, 33, 33);
  }
  
  .sidebar-container {
    width: 26%;
    background-color: rgb(43, 42, 42);
    border-right: 1px solid #525252;
    display: flex;
    flex-direction: column;
  }
  
  .fixed-uppersidebar {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  .scrollable-lowersidebar {
    flex: 1; /* Takes up remaining space */
    overflow-y: auto; /* Scrollable area */
  }
  
  .content-container {
    width: 75%; /* Adjust width as needed */
    overflow-y: hidden; /* Prevent scrolling in this section */
  }
  
  .scrollable-lowersidebar::-webkit-scrollbar {
    width: 5px;
  }
  
  .scrollable-lowersidebar::-webkit-scrollbar-thumb {
    background-color: #525252;
    border-radius: 10px;
  }
  
  .scrollable-lowersidebar::-webkit-scrollbar-track {
    background-color: transparent;
  }
  </style>