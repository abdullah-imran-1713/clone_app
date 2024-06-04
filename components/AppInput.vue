<template>
  <div class="form-group">
    <label :for="for"></label>
    <input :type="type" :id="for" :placeholder="placeholder" required :class="{ 'blue-border': borderColor === 'blue', 'grey-border': borderColor === 'grey' }" />
  </div>
</template>

<script>
export default {
  props: {
    for: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    borderColor: {
      type: String,
      required: true
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
