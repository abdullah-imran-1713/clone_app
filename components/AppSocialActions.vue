<template>
    <div class="social-actions">
      <button type="button" @click="likePost" class="btn">
        <img :src="isLiked ? blueLikeIcon : defaultLikeIcon" class="LCS-icons-css pe-1" /> Like
      </button>
      <button type="button" @click="commentPost" class="btn">
        <img class="LCS-icons-css pe-1" src="@/assets/icons/comment-transparent.png" /> Comment
      </button>
      <button type="button" @click="sharePost" class="btn">
        <img class="LCS-icons-css pe-1" src="@/assets/icons/share-transparent.png" /> Share
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import defaultLikeIcon from '../assets/icons/thumbs-up-transparent.png';
  import blueLikeIcon from '../assets/icons/thumbs-up-colored.png';
  
  const isLiked = ref(false);
  
  const likePost = () => {
    isLiked.value = !isLiked.value;
    console.log("Liked the post");
  };
  
  const commentPost = () => {
    console.log("Commented on the post");
  };
  
  const sharePost = () => {
    console.log("Shared the post");
  };
  </script>
  
  <style scoped>
  .social-actions {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
  
  .btn {
    

    color: #CACACA;
    
    border-radius: 5px;
  }
  
  .btn:hover {
    background-color: rgb(71, 71, 71);
  }
  
  .LCS-icons-css {
    width: 30px;
    height: 30px;
  }
  </style>
  