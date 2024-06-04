<template>
    <input class="search-input-css" :placeholder="placeholder" />
</template>
<script setup>

const props = defineProps({
    placeholder:{
        type:String,
        default:'default'
    },
});

</script>
<style scoped>
    
    .search-input-css {
        background-color: rgb(71, 71, 71);
        border: none;
        border-radius: 20px;
        height: 35px;
        width: 230px;
        padding-left: 35px;
        color: white;
        outline: none;
    }

</style>