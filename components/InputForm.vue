<template>

    <div class="form-group">
        <label :for="for"></label>
        <input :type="type" :id="for" :placeholder="placeholder" required>
    </div>

</template>
<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        for: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        }
    }
}
</script>
<style scoped>

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}



input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
    
</style>