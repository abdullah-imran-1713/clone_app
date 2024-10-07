<template>
  <div class="template-container">
    <div class="d-flex align-items-center h-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 pt-10">
            <div class="w-100">
              <img class="h-106px" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
            </div>
            <p class="font-css pt-4">
              Facebook helps you connect and share with the people in your
              life.
            </p>
          </div>
          <div class="col-sm-12 col-md-6 for-md-screen">
            <div class="form-container">
              <form @submit.prevent="handleLogin">
                <AppInput v-model="loginEmail" type="email" placeholder="Email address" borderColor="blue" required />
                <AppInput v-model="loginPassword" type="password" placeholder="Password" borderColor="blue" required />
                <AppButton type="submit" class="d-flex justify-content-center mb-2"
                  :customStyle="{ lineHeight: '48px' }">Log In</AppButton>
              </form>

              <div class="d-flex justify-content-center">
                <NuxtLink class="link-font" to="/identify">Forgotten password?</NuxtLink>
              </div>
              <div>
                <hr />
              </div>
              <AppButton @click="showModal = true" class="d-flex justify-content-center" buttonType="primary"
                :customStyle="{ lineHeight: '48px' }">Create new account</AppButton>

              <AppModal crossColor="dark" :show="showModal" @close="closeModal" closeButtonPosition="top-right"
                @click.self="closeModal" ref="modalRef">
                <div>
                  <div class="pe-1">
                    <form @submit.prevent="handleSignup" class="app-modal-form-container">
                      <div class="form-div-container">
                        <h2>Sign Up</h2>
                        <p>It's quick and easy.</p>
                      </div>
                      <AppSeparatorLine :customStyle="{ backgroundColor: '#ccc', width: '100%', height: '1px' }" />
                      <div class="form-div-container">
                        <div>
                          <div v-if="error" class="row">
                            <div class="col">
                              <div class="alert alert-danger" role="alert">
                                {{ error }}
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col">
                              <AppInput v-model="signupName" type="text" placeholder="Full Name" borderColor="grey" />
                            </div>
                          </div>
                        </div>

                        <AppInput v-model="signupEmail" type="email" placeholder="Email Address" borderColor="grey" />
                        <AppInput v-model="signupTel" type="tel" placeholder="Phone Number (optional)"
                          borderColor="grey" :required="false" />
                        <AppInput class="password-input-container" v-model="signupPassword" :type="isPasswordVisible ? 'text' : 'password'"
                          placeholder="Password" borderColor="grey" />

                        <button type="button" @click="togglePasswordVisibility" class="text-black toggle-password-button">
                          {{ isPasswordVisible ? 'Hide' : 'Show' }}
                        </button>

                        <p>Date of birth</p>
                        <AppDob v-model:dob="dob" />

                        <p>Gender</p>
                        <div class="row">
                          <div class="col">
                            <AppGender label="Male" v-model:selectedGender="gender" />
                          </div>
                          <div class="col">
                            <AppGender label="Female" v-model:selectedGender="gender" />
                          </div>
                          <div class="col">
                            <AppGender label="Custom" v-model:selectedGender="gender" />
                          </div>
                        </div>

                        <AppButton type="submit" class="d-flex justify-content-center mt-3" buttonType="primary"
                          :customStyle="{ width: '70%', lineHeight: '48px' }">Sign up</AppButton>

                        <div v-if="error"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </AppModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '#app'

const loginEmail = ref('') // Separate email for login
const loginPassword = ref('') // Separate password for login
const signupName = ref('') // Name for signup
const signupEmail = ref('') // Separate email for signup
const signupTel = ref('') // Phone number for signup
const signupPassword = ref('') // Separate password for signup
const dob = ref('')
const gender = ref('')
const error = ref('')
const router = useRouter()
const showModal = ref(false)
const modalRef = ref(null)
const isPasswordVisible = ref(false);

const closeModal = () => {
  showModal.value = false
  resetForm()
}

const resetForm = () => {
  loginEmail.value = ''
  loginPassword.value = ''
  signupName.value = ''
  signupEmail.value = ''
  signupTel.value = ''
  signupPassword.value = ''
  dob.value = ''
  gender.value = ''
  error.value = ''
}

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    closeModal()
  }
}

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

// Add event listener when the component mounts
onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

// Remove event listener when the component unmounts
onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
//'http://localhost:5000/auth/login'
const handleLogin = async () => {
  const { data, error: fetchError } = await useFetch('https://facebook-clone-app-backend-ha41.vercel.app/auth/login', {
    method: 'POST',
    body: { email: loginEmail.value, password: loginPassword.value }, // Use loginEmail and loginPassword
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (fetchError.value) {
    error.value = fetchError.value.message
  } else {
    const token = data.value.token
    localStorage.setItem('token', token)
    router.push('/home')
  }
}

const handleSignup = async () => {
  if (!dob.value) {
    error.value = 'Please enter a valid date of birth'
    return
  }

  const formattedDob = formatDateToMMDDYYYY(dob.value)

  if (!formattedDob) {
    error.value = 'Please enter a valid date of birth'
    return
  }

  const { data, error: fetchError } = await useFetch('https://facebook-clone-app-backend-ha41.vercel.app/auth/signup', {
    method: 'POST',
    body: {
      name: signupName.value, // Use signupName
      email: signupEmail.value, // Use signupEmail
      phone: signupTel.value && signupTel.value.trim() !== '' ? signupTel.value : null,
      password: signupPassword.value, // Use signupPassword
      dob: formattedDob,
      gender: gender.value
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (fetchError.value) {
    error.value = fetchError.value?.data?.message
  } else {
    router.push('/home')
  }
}

const formatDateToMMDDYYYY = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  const parsedDate = new Date(date)

  if (isNaN(parsedDate)) {
    return null
  }

  return parsedDate.toLocaleDateString('en-US', options)
}
</script>

<style scoped>
.template-container {
  background-color: #f0f2f5;
  height: 100vh;
}
.pt-10 {
  padding-top: 10%;
}
.h-106px {
  height: 106px;
  margin: -28px;
}
.font-css {
  font-size: 24px;
  width: auto;
  line-height: 28px;
  font-family: Arial, Helvetica, sans-serif;
}
.form-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.link-font {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-decoration: none;
}
.link-font:hover {
  text-decoration: underline;
}
.app-modal-form-container {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.form-div-container {
  padding: 20px;
}
.password-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.password-input {
  flex-grow: 1; /* Allow the input to grow */
}

.toggle-password-button {
  position: absolute;
  right: 33px; /* Adjust to fit within the input field */
  bottom: 268px;
  border: none;
  background: none;
  cursor: pointer;
  color: #007bff; /* Customize color */
}

@media (min-width: 768px) {
  .for-md-screen {
    display: flex;
    justify-content: center;
  }
}
</style>
