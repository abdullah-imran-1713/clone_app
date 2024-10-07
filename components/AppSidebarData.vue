<template>
    <NuxtLink v-if="link" class="link-font when-mouse d-flex align-item-center" :to="link">
        
        
        <div class="container">
            <div class="row">
                <div class="col-lg-1 col-md-1 ">
                    <img class="image" :src="image" />
                </div>
                <div class="col-lg-10 col-md-9">
                    <div class="  pt-1 ps-3">{{ text }}</div>
                </div>
            </div>
        </div>
    </NuxtLink>

    <div v-else class="when-mouse d-flex align-item-center">
        <img class="image" :src="image" />
        <div class="">{{ text }}</div>
    </div>
</template>

<script setup>

    defineProps({

        image:{
            type:String,
            required:true
        },

        text:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:true
        }

    })

</script>

<style scoped>
    .image
    {
        width: 30px;
        height: 30px;
    }
    .link-font 
    {
    
    text-decoration: none;
    color:white;
    }
  .when-mouse:hover
   {
    background-color: rgb(59, 59, 59);
    border-radius: 25px;
   }
   .for-padding
   {
    padding-left: 7px;
   }
   @media (max-width:768px)
{
    .for-remove-padding
    {
        padding-left: 0px;
    }
  
}
   @media (max-width:409px)
{
    .for-display
    {
        font-size: 10px;
        
    }
  
}
</style>