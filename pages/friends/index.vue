<!-- <template>
    <div>
        <AppHeader/>

        <div class="main-container">
            <div class="ps-4 pe-4">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <AppSidebar :friends="true"/>
                    </div>
                    <div class="col-12 col-lg-8">
                        <AppFriendRequest />
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

<!-- <template>                                       for full screen width 
  <div class="app-wrapper">
    <AppHeader />

    <div class="main-container">
      <div class="ps-4 pe-4">
        <div class="row">
          <div class="col-12 col-lg-3">
            <AppSidebar :friends="true" />
          </div>
          <div class="col-12 col-lg-8">
            <AppFriendRequest />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  flex-grow: 1;
  background-color: rgb(34, 33, 33);
}
</style> -->





<!-- for outline scene
col-4 col-sm-3 col-md-3 col-lg-3 ps-4 
col-8 col-sm-8 col-md-8 col-lg-8 ps-4
-->
<!-- <template>
  <div>
    <AppHeader />

    <div class="main-container">
      
        <div class="row">
          <div class="col-3 ps-4"
            :style="{ color: 'white', backgroundColor: 'rgb(43, 42, 42)', borderRight: '1px solid #525252' }">
            <AppSidebar :friends="true" />
          </div>
          <div class="col-9 pe-4">
            <AppFriendRequest />
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

<!-- <template>                      MAIN OLD VERSION
  <div>
      <AppHeader />
      <div class="main-container">
          <div class="ps-0 pe-4">
              <div class="row">
                  <div class="col-3 ps-4"
            :style="{ color: 'white', backgroundColor: 'rgb(43, 42, 42)', borderRight: '1px solid #525252' }">
            <AppSidebar :friends="true" />
          </div>
                  <div class="col-9 pe-4">
            <AppFriendRequest />
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
    <AppHeader class="app-header" />
    <div class="main-container">
      <div class="sidebar-wrapper">
        <AppSidebar :friends="true" />
      </div>
      <div class="content-wrapper">
        <AppFriendRequest />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Prevents unwanted scrolling on the body */
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px; /* Adjust based on your header height */
  z-index: 1000; /* Ensure it sits above other content */
}

.main-container {
  display: flex;
  margin-top: 50px; /* Match this value to the height of the header */
  height: calc(100vh - 50px); /* Adjust based on your header height */
}

.sidebar-wrapper {
  position: fixed;
  top: 50px; /* Adjust this value to match the height of your header */
  bottom: 0;
  left: 0;
  width: 26%;
  background-color: rgb(43, 42, 42);
  color: white;
  border-right: 1px solid #525252;
  padding: 1rem;
  overflow-y: auto; /* Optional: If you want the sidebar to be scrollable */
}

.content-wrapper {
  margin-left: 26%; /* Same width as sidebar-wrapper */
  height: calc(100vh - 50px); /* Adjust based on your header height */
  overflow-y: auto; /* Allows the main content to scroll with the browser’s scrollbar */
  padding: 1rem;
  background-color: rgb(34, 33, 33);
}
</style>
