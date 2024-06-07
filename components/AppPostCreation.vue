<template>
    <div class="d-flex justify-content-center parent-post-creation-div">
        <div class="post-creation-div">
            <div class="container d-flex align-items-center ">
                <img class="profile-display-css mt-3" src="/assets/images/no-disp.png" />
                <AppRoundedInput style="width: 85%;" class="ms-2 mt-3" placeholder="What's on your mind?" />
            </div>
            <div class="pt-3 pb-3 ps-3 pe-3">
                <AppSeparatorLine color="rgb(71, 71, 71)" />
            </div>

            <div class="d-flex justify-content-center mb-3 mt-2">
                <button @click="showModal = true" class="post-button-css fw-bold"><img class="pe-2"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFaxPxfkHt_sHXlG4WJ0HdQPL4YoeGsw5I8vhih4azDkqqyKiBGBCGHYkPYFIksuLw97CQaz4Q8cEMVRzRw9PqA" />Photos/Videos</button>
            </div>
            <AppModal :show="showModal" @close="showModal = false">
                <div>
                    <div class="container">

                        <form class="app-modal-form-container">
                            <div class="form-div-container d-flex justify-content-center">
                                <h5 style="color: rgb(153, 153, 153)" class="fw-bold pt-2">Create Post</h5>
                            </div>
                            <AppSeparatorLine color="rgb(71, 71, 71)" />
                            <div class="form-div-container">
                                <input class="post-creation-form pt-3 pb-3" placeholder="What's on your mind?" />
                                <div class="parent-upload-div">
                                    <div class="upload-div">
                                        <div class="upload-inside-div d-flex flex-row justify-content-center text-white">
                                           <div class="col"><img src="/assets/icons/upload-photo-icon.png" /></div> 
                                            <div class="col">Add Photos/Videos</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </AppModal>

        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>
<style scoped>
    .post-creation-div
    {
        width: 400px;
        background-color: rgb(43, 42, 42);
        border-radius: 3%;
    }
    .parent-post-creation-div
    {
        padding-top: 30px;
    }

    .profile-display-css {
        width: 50px;
        height: 45px;
    }

    .post-button-css
    {
        border: none;
        background-color: transparent;
        color: rgb(153, 153, 153);
    }
    .app-modal-form-container 
    {
    background-color: rgb(34, 33, 33);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    width: 500px;
    }
    
    .form-div-container
    {
        padding:20px;
    }

    .post-creation-form
    {
        background-color: transparent;
        border: none;
        
    }

    .parent-upload-div
    {
        border: 1px solid rgb(153, 153, 153);
        padding: 10px;
        border-radius: 3%;
    }

    .upload-div
    {
        background-color: rgb(66, 66, 66);
        height: 200px;
        width: 100%;
        border-radius: 3%;
    }
    
    .upload-inside-div
    {
        padding: 50px;
    }
</style>