<!-- <template>
    <div>
        <AppHeader/>
        <div class="main-container">
            <div>
                <div class="row">
                    <div class="col-12 col-lg-4 ps-4" :style="{ backgroundColor: 'rgb(43, 42, 42)', borderRight: '1px solid #525252' }">
                        <AppFriendUpperSidebar class="pt-4" text="Friend Requests" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                        <AppFriendLowerSidebar class="mt-2" username="Username" />
                    </div>
                    <div class="col-12 col-lg-8 d-flex justify-content-center position-relative">
                        <AppPreviewProfile />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.main-container {
    background-color: rgb(34, 33, 33);
}
</style> -->

<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="main-container d-flex">
      <div class="sidebar-container">
        <div class="fixed-uppersidebar">
          <AppFriendUpperSidebar class="pt-4" text="Friend Requests" />
        </div>
        <AppSeparatorLine :customStyle="{ backgroundColor: 'rgb(71, 71, 71)', width: '80%', height: '1px',marginLeft:'28px' }" />
        <!-- Scrollable Lower Sidebar -->
        <div class="scrollable-lowersidebar">
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
          <AppFriendLowerSidebar class="mt-2" username="Username" :applyornot="apply" />
        </div>
      </div>
      <div class="content-container d-flex justify-content-center position-relative">
        <AppPreviewProfile />
      </div>
    </div>
  </div>
</template>

<script setup>
const apply = ref(true);
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
  width: 26%; /* Adjust width as needed */
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
