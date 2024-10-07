<template>
    <div class="container when-a-mouse">
        <div class="row">

            <div class="col-lg-3 col-md-12"> 
                <img class="user-disp-size" :src="image.userdisp" />
            </div>

            <div class="col-lg-9 col-md-12 mt-1">
                <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div v-if="fromlist" class="ps-2 mt-4 text-white">{{ username }}</div>
                        <div v-else class="ps-2 pb-2 text-white">{{ username }}</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div v-if="applyornot" class="text-white">
                            <AppButton :customStyle="{ lineHeight: '30px', fontSize: '17px', width: '100px' }">
                                Confirm
                            </AppButton>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div v-if="applyornot" class="text-white">
                            <AppButton
                                :customStyle="{ backgroundColor: 'rgb(96, 103, 112)', lineHeight: '30px', fontSize: '17px', width: '100px' }">
                                Delete
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>

</template>

<script setup>

import { image } from '~/assets/images/propimg';

    defineProps({
        username:{
            type:String,
            required:true
        },
        applyornot:{
            type:Boolean,
            default:null
        },
        fromlist:{
            type:Boolean,
            default:null
        }
    })

</script>

<style scoped>

.user-disp-size
{
    width: 80px;
}

.when-a-mouse:hover
{
    background-color: rgb(58, 59, 60);
    border-radius: 25px;
    cursor: pointer;
}
</style>