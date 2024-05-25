<template>
    <div>
        <button :style="{ backgroundColor: color, width: width, fontSize: fontsize }" class="btn" >{{ text }}</button>
    </div>
</template>
<script>
export default {

    props:
    {
        text:
        {
            type:String,
            required:true,
        },

        color:
        {
            type:String,
            default:'#007bff', // default is set to be blue
        },

        width:
        {
            type:String,
            default:'auto',
        },

        fontsize:
        {
            type:String,
            default:'auto',
        }

    }
    
}
</script>
<style scoped>
        .btn {
            padding: 0 16px;
            color: #fff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            line-height: 48px;
            transition: background-color 0.3s;
            font-weight: bold;
            margin: 15px 0;
        }
    
        .btn:hover {
            opacity: 0.9;
        }
</style>