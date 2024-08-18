<template>
    <div class="d-flex justify-content-center mx-auto pb-4">
        <div class="card" style="width: 400px; background-color: rgb(43, 42, 42)">
            <div class="card-body">
                <div class="row">
                    <div class="col-2">
                        <img class="profile-display-css" :src="userDisp" alt="No img"/>
                    </div>
                    <div class="col pt-2">
                            <p style="color: rgb(202, 202, 202);">{{ userName }}</p>
                    </div>
                </div>
                <p class="card-text pt-3 pb-3" style="color: rgb(202, 202, 202);">{{ postCaption }}</p>
            </div>
            <img :src="postImage" alt="No img"/>
            <AppSocialActions />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    userName: {
        type: String,
        default: 'Username'
    },
    postCaption: {
        type: String,
        default: ''
    },
    postImage: {
        type: String,
        default: ''
    },
    userDisp: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>
.pt-30
{
    padding-top: 30px;
}
.profile-display-css 
{
    width: 50px;
    height: 45px;
}
</style>
