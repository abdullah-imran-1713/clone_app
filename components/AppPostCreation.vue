<template>
  <div class="d-flex justify-content-center parent-post-creation-div pb-4">
    <div class="post-creation-div">
      <div class="container d-flex align-items-center">
        <img class="profile-display-css mt-3" src="/assets/images/no-disp.png" />
        <button @click="openModal" class="like-input-field-div mt-3 ms-3">
          <p class="pt-1">What's on your mind?</p>
        </button>
      </div>
      <div class="pt-3 pb-3 ps-3 pe-3">
        <AppSeparatorLine color="rgb(71, 71, 71)" />
      </div>

      <div class="d-flex justify-content-center mb-3 mt-2">
        <button @click="openModal" class="post-button-css fw-bold">
          <img class="pe-2"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFaxPxfkHt_sHXlG4WJ0HdQPL4YoeGsw5I8vhih4azDkqqyKiBGBCGHYkPYFIksuLw97CQaz4Q8cEMVRzRw9PqA" />
          Photos/Videos
        </button>
      </div>
      <AppModal :show="showModal" @close="closeModal" closeButtonPosition="top-right-colored">
        <div>
          <div class="container">
            <form class="app-modal-form-container">
              <div class="form-div-container d-flex justify-content-center">
                <h5 style="color: rgb(153, 153, 153)" class="fw-bold pt-2">Create Post</h5>
              </div>
              <AppSeparatorLine color="rgb(71, 71, 71)" />
              <div class="form-div-container">
                <div>
                  <div class="row">
                    <div class="col-1">
                      <img class="profile-display-css ps-1 mt-1 mb-1" src="/assets/images/no-disp.png" />
                    </div>
                    <div class="col">
                      <div class="row">
                        <div style="color: rgb(202, 202, 202);" class="col-1 ps-4">
                          Username
                        </div>
                      </div>
                      <div class="row">
                        <div class="ps-4">
                          <select class="dropdown-css" id="visibility">
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input ref="postInput" class="post-creation-form pt-3 pb-3 " placeholder="What's on your mind?" />
                <div v-if="showUploadDiv" class="parent-upload-div">
                  <button @click="closeUploadDiv" type="button" class="div-closer">x</button>
                  <button @click="triggerFileInput" type="button" class="upload-div d-flex flex-column align-items-center justify-content-center">
                    <img class="upload-img" src="/assets/icons/upload-photo-icon.png" />
                    <div class="upload-text">Add Photos/Videos</div>
                  </button>
                </div>
                <div class="outline">
                  <div class="row pt-3 ps-3">
                    <div class="col-6">
                      <button class="add-post-button">
                        <p style="color: rgb(202, 202, 202);">Add to your post</p>
                      </button>
                    </div>
                    <div class="col-1 me-2">
                      <button  type="button" @click="toggleUploadDiv" class="upload-button-css" data-bs-toggle="tooltip" data-bs-placement="top" title="Photos/Videos">
                        <div class="to-round-upload-button">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFaxPxfkHt_sHXlG4WJ0HdQPL4YoeGsw5I8vhih4azDkqqyKiBGBCGHYkPYFIksuLw97CQaz4Q8cEMVRzRw9PqA" />
                        </div>
                      </button>
                      <input  type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                    </div>
                    <div class="col-1">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGONt6pxtA5Yt5AeVmJNQNhohqwRjkkxMOiGrBGOSTEwzaiuF4etDtFQ4pU2QESHol_5AetyEr9fHZnG5v4PukW" />
                    </div>
                    <div class="col-1">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeH87oKC4Z4WRWcqaxXzmDSTvPIN-OmHLJy88g346YcsnNViViXC7_ykW8esU0vyKjxc9EJj71wY__qt0AKxckEi" />
                    </div>
                    <div class="col-1">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeHe2EBbIbRL1_1pkBUH7OOT88Ps36vvyGDzw-zfq-_IYMxIfwxXHh2Jcueh3geQxKbe4xtiu6l-K7xrJBWVV1Pf" />
                    </div>
                    <div class="col-1">
                      <img
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeHT6cKfZt1hONlGIqSieDlAJTqz5hgP3TklOrPmGA_dOX3ln_oHv5YuhX250lLRm0JBPuKpqe31Z4HZ16Ja52rk" />
                    </div>
                  </div>
                </div>

                <AppButton buttonType="default">Post</AppButton>
              </div>
            </form>
          </div>
        </div>
      </AppModal>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import AppSeparatorLine from './AppSeparatorLine.vue';
import AppModal from './AppModal.vue';

const showModal = ref(false);
const showUploadDiv = ref(false);
const fileInput = ref(null);
const postInput = ref(null);

const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}

const toggleUploadDiv = () => {
  showUploadDiv.value = true;
}

const closeUploadDiv = () => {
  showUploadDiv.value = false;
}

const triggerFileInput = () => {
  fileInput.value.click();
}

const handleFileChange = (event) => {
  const files = event.target.files;
  console.log('Selected files:', files);
}

watch(showModal, async (newVal) => {
  if (newVal) {
    await nextTick();
    postInput.value.focus();
  } else {
    showUploadDiv.value = false;
  }
});
</script>

<style scoped>
/* Add your styles here */
.post-creation-div {
  width: 400px;
  background-color: rgb(43, 42, 42);
  border-radius: 3%;
}

.parent-post-creation-div {
  padding-top: 30px;
}

.profile-display-css {
  width: 50px;
  height: 45px;
}

.post-button-css {
  border: none;
  background-color: transparent;
  color: rgb(153, 153, 153);
}

.app-modal-form-container {
  background-color: rgb(34, 33, 33);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
}

.form-div-container {
  padding: 10px;
}

.post-creation-form {
  background-color: transparent;
  border: none;
  width: 100%;
  color: rgb(202, 202, 202);
  font-size: 25px;
}

.post-creation-form:focus {
  outline: none;
}

.parent-upload-div {
  border: 1px solid rgb(153, 153, 153);
  padding: 10px;
  border-radius: 3%;
  position: relative;
}

.upload-div {
  background-color: rgb(66, 66, 66);
  height: 200px;
  width: 100%;
  border: none;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload-div:hover
{
  background-color: rgb(100, 100, 100);
}

.upload-img {
  margin-bottom: 10px;
}

.upload-text {
  color: white;
}

.like-input-field-div
{
  background-color: rgb(71, 71, 71);
  border: none;
  border-radius: 20px;
  height: 35px;
  width: 300px;
  padding-left: 10px;
  color: rgb(110, 110, 110);
  outline: none;
  text-align: left;
}

.like-input-field-div:hover
{
  background-color: rgb(90, 89, 89);
}

.profile-display-css
{
  width: 50px;
  height: 45px;
}

.select 
{
  padding: 8px;
  font-size: 16px;
}

.dropdown-css
{
  background-color: rgb(78, 77, 77);
  border-radius: 5px;
  border: none;
  color: rgb(202, 202, 202);
}

.dropdown-css:focus
{
  outline: none;
}

.outline
{
  border: 1px solid rgb(71, 71, 71);
  border-radius: 10px;
}

.add-post-button
{
  border: none;
  background-color: transparent;
}

.upload-button-css
{
  border: none;
  background-color: transparent;
}

.to-round-upload-button
{
  width: 35px;
  height: 30px;
}

.to-round-upload-button:hover
{
  background-color: rgb(88, 88, 88);
  border-radius: 100px;
 
}

.div-closer
{
  background: rgb(48, 48, 48);
  color: rgb(202, 202, 202);
  border: none;
  border-radius: 100px;
  width: 36px;
  height: 36px;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
}

.div-closer:hover
{
  background-color: rgb(88, 88, 88);
}
</style>
