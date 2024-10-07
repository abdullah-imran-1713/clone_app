<template>
  <div class="form-group">
    <label :for="for"></label>
    <input
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="modelValue"
       @input="$emit('update:modelValue', $event.target.value === '' ? null : $event.target.value)"
      :class="{ 'blue-border': borderColor === 'blue', 'grey-border': borderColor === 'grey' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    for: {
      type: String,
      required: false, // Making `for` optional
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    borderColor: {
      type: String,
      required: true,
    },
    modelValue: {  
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: true, // Default is true, but you can pass `false`
    },
  },
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
  transition: border-color 0.3s;
}

input.blue-border:focus {
  border-color: #0866ff;
  outline: none;
}

input.grey-border:focus {
  border-color: #ccc;
  outline: none;
}
</style>
