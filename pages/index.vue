<template>
  <div class="template-container">
    <div class="container p-200px">
      <div class="row">
        <div class="col-sm-12 col-md-6 pt-10">
          <div class="w-100">
            <img class="h-106px" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
          </div>
          <p class="font-css pt-4">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div class="col-sm-12 col-md-6 d-flex justify-content-end">
          <div class="form-container">
            <form>
              <AppInput for="email" type="email" placeholder="Email address or phone number" borderColor="blue" />
              <AppInput for="password" type="password" placeholder="Password" borderColor="blue" />
            </form>
            <NuxtLink to="/home">
              <AppButton class="d-flex justify-content-center">Log in</AppButton>
            </NuxtLink>
            <div class="d-flex justify-content-center">
              <NuxtLink class="link-font" to="/identify">Forgotten password?</NuxtLink>
            </div>
            <div>
              <hr />
            </div>
            <!-- <NuxtLink class="text-decoration-none" to="/account"> -->

            <AppButton @click="showModal = true" class="d-flex justify-content-center" buttonType="primary">Create new
              account</AppButton>

            <!-- </NuxtLink> -->
            <AppModal :show="showModal" @close="showModal = false">
              <div>
                <div class="container">

                  <form class="app-modal-form-container">
                    <div class="form-div-container">
                      <h2>Sign Up</h2>
                      <p>It's quick and easy.</p>
                    </div>
                    <AppSeparatorLine color="#ccc" />
                    <div class="form-div-container">
                      <div>
                        <div class="row">
                          <div class="col">
                            <AppInput for="name" type="name" placeholder="First name" borderColor="grey" />
                          </div>
                          <div class="col">
                            <AppInput for="name" type="name" placeholder="Surname" borderColor="grey" />
                          </div>
                        </div>
                      </div>
                      <AppInput for="email" type="email" placeholder="Mobile Number or email address"
                        borderColor="grey" />
                      <AppInput for="password" type="password" placeholder="New Password" borderColor="grey" />
                      <p>Date of birth</p>
                      <AppDob />
                      <p>Gender</p>
                      <div>
                        <div class="row">
                          <div class="col">
                            <AppGender label="Female" :selectedGender="gender" @update:selectedGender="updateGender" />
                          </div>
                          <div class="col">
                            <AppGender label="Male" :selectedGender="gender" @update:selectedGender="updateGender" />
                          </div>
                          <div class="col">
                            <AppGender label="Custom" :selectedGender="gender" @update:selectedGender="updateGender" />
                          </div>
                        </div>
                      </div>

                      <AppButton class="d-flex justify-content-center" buttonType="primary"
                        :customStyle="{ width: '70%' }">Sign up</AppButton>


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
</template>
  
<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const gender = ref('') // Initial gender value

function updateGender(newGender) {
  gender.value = newGender
}
</script>
  
  <style scoped>
  .template-container {
    background-color: #f0f2f5;
    height: 100vh;
  }
  .p-200px {
    padding: 100px 100px;
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
  </style>
  



 