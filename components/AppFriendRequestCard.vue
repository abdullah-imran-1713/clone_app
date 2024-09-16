<template>
    <div>
        <div class="card" style="background-color: rgb(110, 110, 110) ;">
            <img :src="image" class="card-img-top" alt="...">
            <div class="card-body" style="background-color: rgb(56, 55, 55)">
                <h5 class="card-title text-white fw-normal">{{ title }}</h5>
                <AppButton class="mb-2" buttonType="default" :customStyle="{ lineHeight:'30px' }">
                    Confirm
                </AppButton>
                <AppButton :customStyle="{ backgroundColor:'rgb(96, 103, 112)', lineHeight:'30px' }">
                    Delete
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script setup>

    defineProps({

        image:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }

    })

</script>

<style scoped>

</style>