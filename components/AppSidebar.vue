<template>
    <div v-if="home" style="color: white" class="parent-sidebar-div">
        <nav>

            <AppSidebarData class="pt-2 pb-2" :image="image.userdisp" text="Drake" link="/profile" />
            <AppSidebarData class="pt-2 pb-2" :image="icons.friendsicon" text="Friends" link="/friends" />
            <AppSidebarData class="pt-2 pb-2" :image="icons.memoriesicon" text="Memories" link="/memories"/>
            <AppSidebarData class="pt-2 pb-2" :image="icons.savedicon" text="Saved" link="/saved" />
            <AppSidebarData class="pt-2 pb-2" :image="icons.groupsicon" text="Groups" link="/groups"/>
            <AppSidebarData class="pt-2 pb-2" :image="icons.videosicon" text="Videos" link="videos" />
            
        </nav>
    </div>

    <div v-if="friends" :style="{ color: 'white' }" class="parent-sidebar-div">
        <nav>

            <AppSidebarData class="pt-2 pb-2" :image="icons.friendrequesticon" text="Friend requests" link="/friends/requests" />
            <AppSidebarData class="pt-2 pb-2" :image="icons.viewallfriendsicon" text="All friends" link="/friends/lists" />

        </nav>
    </div>
</template>
<script setup>
import {icons} from '~/assets/icons/propicons';
import { image } from '~/assets/images/propimg';

defineProps({
    home:{
        type:Boolean,
        default:null
    },
    friends:{
        type:Boolean,
        default:null
    }
})

</script>
<style scoped >
     .parent-sidebar-div
    {
        padding-top: 30px;
    }
    .sidebar 
    {
         width: 200px;
    }

    .sidebar ul 
    {
        list-style-type: none;
    }


</style>