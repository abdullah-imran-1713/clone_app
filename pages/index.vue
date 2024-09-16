<template>
  <div class="template-container">
    <div class="d-flex align-items-center h-100">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 pt-10">
            <div class="w-100">
              <img class="h-106px" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
            </div>
            <p class="font-css pt-4">Facebook helps you connect and share with the people in your life.</p>
          </div>
          <div class="col-sm-12 col-md-6 for-md-screen">
            <div class="form-container">



              <form @submit.prevent="handleLogin">
                <AppInput v-model="email" type="email" placeholder="Email address" borderColor="blue" required />
                <AppInput v-model="password" type="password" placeholder="Password" borderColor="blue" required />
                <AppButton type="submit" class="d-flex justify-content-center mb-2"
                  :customStyle="{ lineHeight: '48px' }">Log In</AppButton>
              </form>

              <div class="d-flex justify-content-center">
                <NuxtLink class="link-font" to="/identify">Forgotten password?</NuxtLink>
              </div>
              <div>
                <hr />
              </div>
              <!-- <NuxtLink class="text-decoration-none" to="/account"> -->

              <AppButton @click="showModal = true" class="d-flex justify-content-center" buttonType="primary"
                :customStyle="{ lineHeight:'48px' }">Create new
                account</AppButton>

              <!-- </NuxtLink> -->
              <AppModal crossColor="dark" :show="showModal" @close="showModal = false" closeButtonPosition="top-right">
                <div>
                  <div class="container">





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
                              <AppInput v-model="name" type="text" placeholder="First name" borderColor="grey" />
                            </div>


                            <!-- <div class="col">
                              <AppInput for="name" type="name" placeholder="Surname" borderColor="grey" />
                            </div> -->


                          </div>
                        </div>
                        
    <AppInput v-model="email" type="email" placeholder="Mobile Number or email address" borderColor="grey" />
    <AppInput v-model="password" type="password" placeholder="New Password" borderColor="grey" />
                        <p>Date of birth</p>
                        <AppDob />
                        <p>Gender</p>
                        <div>
                          <AppInput v-model="gender" type="text" placeholder="Gender" />

                          <!-- <div class="row">
                            <div class="col">
                              <AppGender label="Female" :selectedGender="gender"
                                @update:selectedGender="updateGender" />
                            </div>
                            <div class="col">
                              <AppGender label="Male" :selectedGender="gender" @update:selectedGender="updateGender" />
                            </div>
                            <div class="col">
                              <AppGender label="Custom" :selectedGender="gender"
                                @update:selectedGender="updateGender" />
                            </div>
                          </div> -->


                        </div>

                        <AppButton type="submit" class="d-flex justify-content-center mt-3 " buttonType="primary"
                          :customStyle="{ width: '70%', lineHeight:'48px' }">Sign up</AppButton>

                        <div v-if="error">{{ error }}</div>

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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '#app'

const name = ref('')
const email = ref('')
const password = ref('')
const dob = ref('07-29-2000') // Example additional field
const gender = ref('') // Example additional field
const error = ref('')
const router = useRouter()


const showModal = ref(false)




const handleLogin = async () => {
  // Use useFetch to call the login API
  const { data, error: fetchError } = await useFetch('http://localhost:5000/auth/login', {
    method: 'POST',
    body: { email: email.value, password: password.value },
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (fetchError.value) {
    error.value = fetchError.value.message // Adjust based on your error response structure
  } else {
    const token = data.value.token
    localStorage.setItem('token', token)
    router.push('/home') // Redirect to home or any other route
  }
}


const handleSignup = async () => {


  console.log(name.value);
  console.log(email.value);
  console.log(password.value);
  console.log(gender.value);
  console.log(dob.value);
  // Use useFetch to call the signup API
  const { data, error: fetchError } = await useFetch('http://localhost:5000/auth/signup', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
      password: password.value,
      dob: dob.value,
      gender: gender.value
    },
    headers: {
      'Content-Type': 'application/json'
    },
    onResponse({ request, response, options }) {
      console.log("API response");
    },
  })

  if (fetchError.value) {
    console.log({ e: fetchError.value })
    error.value = fetchError.value?.data?.message // Adjust based on your error response structure
  } else {
    // Handle successful signup
    router.push('/home') // Redirect to login or any other route
  }
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
  .app-modal-form-container 
    {
    background-color: #ffffff;
    
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    }
    
    .form-div-container
    {
        padding:20px;
    }
@media (min-width:768px)
{
  .for-md-screen
  {
    display: flex;
    justify-content: center;
  }
}
  </style>