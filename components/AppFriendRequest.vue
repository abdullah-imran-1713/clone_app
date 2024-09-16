<!-- <template>

    <div class="container">
        
            <div class="row">
                <div class="col-10">
                    <p class="text-white pt-3 fs-4 fw-normal">Friends Requests</p>
                </div>
                <div class="col-2 pt-4 text-end fs-5 fw-normal">
                    <NuxtLink class=" text-decoration-none see-all" to="/friends/requests">
                        See All
                    </NuxtLink>
                </div>
            </div>
        
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
                <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
            </div>
        </div>
    </div>
</template>

<script setup>

import { image } from '~/assets/images/propimg';

</script>

<style scoped>
.see-all
{
    color: white;
}
.see-all:hover
{
    color: #0866ff;
}
</style> -->


<template>
    <div class="friend-request-content">
      <div class="row">
        <div class="col-lg-10 col-md-10">
          <p class="text-white pt-3 fs-4 fw-normal">Friends Requests</p>
        </div>
        <div class="col-lg-2 col-md-2 col-6 pt-4 media-text-end fs-5 fw-normal">
          <NuxtLink class="text-decoration-none see-all" to="/friends/requests">
            See All
          </NuxtLink>
        </div>
      </div>
  
      <!-- Friend request cards -->
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2" v-for="i in 8" :key="i">
          <AppFriendRequestCard :image="image.friendrequestdp" title="UserName" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { image } from '~/assets/images/propimg';
  </script>
  
  <style scoped>
  .friend-request-content {
    overflow-y: auto;
    height: 100%; /* Makes sure it fills the available space */
    padding: 1rem;
    
  }
  
  .see-all {
    color: white;
  }
  
  .see-all:hover {
    color: #0866ff;
  }

  .media-text-end
  {
    text-align: right;
  }

  @media (max-width:767px)
{
    .media-text-end
    {
        text-align: left;
    }
  
}
  </style>
  