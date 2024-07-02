<template>
    <div>
        <AppHeader />
        <div class="main-container">
            <div>
                <div class="row">
                    <div class="col">
                        <AppSidebar />
                    </div>
                    <div class="col">
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
                    <div class="col">
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
