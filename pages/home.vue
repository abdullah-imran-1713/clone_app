<template>
    <div>
        <AppHeader />
        <div class="main-container">
            <div class="ps-4 pe-4">
                <div class="row">
                    <!-- Sidebar (Hidden on md screens and smaller) -->
                    <div class="col-12 col-lg-4 d-none d-lg-block p-0">
                        <AppSidebar :home="true" />
                    </div>
                    <!-- Main Content (Takes full width on md screens and adjusts on lg screens) -->
                    <div class="col-12 col-md-7 col-lg-4">
                        <AppPostCreation />
                        <AppPostCard 
                            userName="Hanger" 
                            postCaption="Hardest tee in the game because its the hardest to get limited quantities so don't miss stop scrolling and shop your favourite looks."
                            :postImage="image.hangerpost" 
                            :userDisp="image.userdisp" 
                        />
                        <AppPostCard 
                            userName="Hanger" 
                            postCaption="Hardest tee in the game because its the hardest to get limited quantities so don't miss stop scrolling and shop your favourite looks."
                            :postImage="image.hangerpost" 
                            :userDisp="image.userdisp" 
                        />
                    </div>
                    <!-- Sponsored Content (Hidden on small screens and smaller) -->
                    <div class="col-12 col-md-5 col-lg-4 d-none d-sm-block">
                        <AppSponsored />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { image } from '~/assets/images/propimg';
</script>

<style scoped>
.main-container {
    background-color: rgb(34, 33, 33);
}
</style>
