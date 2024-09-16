<template>
    <div>
        <div class="d-flex flex-row bd-highlight mb-3">
            <div class="pt-2 pe-2">
                <button type="button" class="bg-transparent border-0 fs-4">
                    <NuxtLink to="/friends">
                        <Icon name="material-symbols:arrow-left-alt-rounded" color="grey" />
                    </NuxtLink>
                </button>
            </div>
            <div class="pt-2">
                <p class="text-white fs-3 fw-bold">{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    text:{
        type:String,
        required:true
    }
})
</script>

<style scoped>

</style>