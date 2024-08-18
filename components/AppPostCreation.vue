<template>
  <div class="d-flex justify-content-center parent-post-creation-div pb-4">
    <div class="post-creation-div mx-auto">
      <div class="container d-flex align-items-center">
        <img class="profile-display-css mt-3" src="/assets/images/no-disp.png" />
        <button @click="openModal" class="like-input-field-div col-10 col-md-8 col-sm-8 mt-3 ms-3">
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
      <AppModal :hideCloseButton="showSecondContent" :show="showModal" @close="closeModal" closeButtonPosition="top-right-colored">
        <div>
          <transition name="slide-fade">
            <div v-if="showFirstContent" key="first" class="container">
              <form ref="modalRef" class="app-modal-form-container">
                <div class="form-div-container d-flex justify-content-center">
                  <h5 style="color: rgb(153, 153, 153)" class="fw-bold pt-2">Create Post</h5>
                </div>
                <AppSeparatorLine color="rgb(71, 71, 71)" />
                <div class="form-div-container">
                  <div>
                    <div class="row">
                      <div class="col">
                        <div class="d-flex flex-row bd-highlight">
                          <div class="bd-highlight">
                            <img class="profile-display-css ps-1 mt-1 mb-1" src="/assets/images/no-disp.png" />
                          </div>
                          <div class="bd-highlight">
                            <div class="d-flex flex-column bd-highlight mb-3">
                              <div class="bd-highlight">
                                <div style="color: rgb(202, 202, 202);" class="col-1 ps-2">
                                  Username
                                </div>
                              </div>
                              <div class="p-2 bd-highlight">
                                <select class="dropdown-css" id="visibility">
                                  <option value="private">Private</option>
                                  <option value="public">Public</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <input v-model="postContent" ref="postInput" class="post-creation-form pt-3 pb-3 "
                    placeholder="What's on your mind?" />
                  <div v-if="showUploadDiv" class="parent-upload-div">
                    <button @click="closeUploadDiv" type="button" class="div-closer">×</button>
                    <button @click="triggerFileInput" type="button"
                      class="upload-div d-flex flex-column align-items-center justify-content-center">
                      <img class="upload-img" src="/assets/icons/upload-photo-icon.png" />
                      <div class="upload-text">Add Photos/Videos</div>
                    </button>
                  </div>
                  <div class="outline">
                    <div class="row pt-2 ps-3">
                      <div class="col-12 col-md-6 text-center text-md-start ">
                        <button type="button" class="add-post-button" @click="handleSwap">
                          <div class="w-100">
                            <p class="m-0 add-post-text pb-2">Add to your post</p>
                          </div>
                        </button>
                      </div>
                      <div class="col-1 d-none d-md-block">
                        <button type="button" @click="toggleUploadDiv" class="upload-button-css"
                          data-bs-toggle="tooltip" data-bs-placement="top" title="Photos/Videos">
                          <div class="to-round-upload-button">
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFaxPxfkHt_sHXlG4WJ0HdQPL4YoeGsw5I8vhih4azDkqqyKiBGBCGHYkPYFIksuLw97CQaz4Q8cEMVRzRw9PqA" />
                          </div>
                        </button>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                      </div>
                      <div class="col-1 d-none d-md-block">
                        <button type="button" class="upload-button-css" data-bs-toggle="tooltip" data-bs-placement="top"
                          title="Tag People">
                          <div class="to-round-upload-button">
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGONt6pxtA5Yt5AeVmJNQNhohqwRjkkxMOiGrBGOSTEwzaiuF4etDtFQ4pU2QESHol_5AetyEr9fHZnG5v4PukW" />
                          </div>
                        </button>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                      </div>
                      <div class="col-1 d-none d-md-block">
                        <button type="button" class="upload-button-css" data-bs-toggle="tooltip" data-bs-placement="top"
                          title="Feeling/activity">
                          <div class="to-round-upload-button">
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeH87oKC4Z4WRWcqaxXzmDSTvPIN-OmHLJy88g346YcsnNViViXC7_ykW8esU0vyKjxc9EJj71wY__qt0AKxckEi" />
                          </div>
                        </button>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                      </div>
                      <div class="col-1 d-none d-md-block">
                        <button type="button" class="upload-button-css" data-bs-toggle="tooltip" data-bs-placement="top"
                          title="Check in">
                          <div class="to-round-upload-button">
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeHe2EBbIbRL1_1pkBUH7OOT88Ps36vvyGDzw-zfq-_IYMxIfwxXHh2Jcueh3geQxKbe4xtiu6l-K7xrJBWVV1Pf" />
                          </div>
                        </button>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                      </div>
                      <div class="col-1 d-none d-md-block">
                        <button type="button" class="upload-button-css" data-bs-toggle="tooltip" data-bs-placement="top"
                          title="GIF">
                          <div class="to-round-upload-button">
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeHT6cKfZt1hONlGIqSieDlAJTqz5hgP3TklOrPmGA_dOX3ln_oHv5YuhX250lLRm0JBPuKpqe31Z4HZ16Ja52rk" />
                          </div>
                        </button>
                        <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" multiple />
                      </div>
                    </div>
                  </div>

                  <AppButton :disabled="!isPostEnabled" :button-type="'default'">Post</AppButton>
                </div>
              </form>
            </div>
            <div v-else key="second" class="container">
              <!-- Second content of the modal -->
              <form ref="modalRef" class="app-modal-form-container">
                <div  v-if="showSecondContent" class="form-div-container d-flex justify-content-center">
                  <Icon class="back-arrow" @click="handleBack" aria-label="Back" name="material-symbols:arrow-back-rounded" color="grey" />
                  <h5 style="color: rgb(153, 153, 153)" class="fw-bold pt-2">Add to your post</h5>
                </div>
                <button v-if="!showSecondContent" class="modal-close" @click="closeModal" aria-label="Close"></button>
                <AppSeparatorLine color="rgb(71, 71, 71)" />
                <div class="form-div-container">
                  <div class="container">
                    <div class="row">
                      <div class="col-6 ">
                        <button type="button" @click="handlePhotosVideosClick" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div>
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeFaxPxfkHt_sHXlG4WJ0HdQPL4YoeGsw5I8vhih4azDkqqyKiBGBCGHYkPYFIksuLw97CQaz4Q8cEMVRzRw9PqA" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">Photo/video</div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div>
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png?_nc_eui2=AeGONt6pxtA5Yt5AeVmJNQNhohqwRjkkxMOiGrBGOSTEwzaiuF4etDtFQ4pU2QESHol_5AetyEr9fHZnG5v4PukW" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              Tag People
                            </div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div>
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeH87oKC4Z4WRWcqaxXzmDSTvPIN-OmHLJy88g346YcsnNViViXC7_ykW8esU0vyKjxc9EJj71wY__qt0AKxckEi" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              Feeling/activity
                            </div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div class="">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png?_nc_eui2=AeHe2EBbIbRL1_1pkBUH7OOT88Ps36vvyGDzw-zfq-_IYMxIfwxXHh2Jcueh3geQxKbe4xtiu6l-K7xrJBWVV1Pf" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              Check in
                            </div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div class="">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png?_nc_eui2=AeHT6cKfZt1hONlGIqSieDlAJTqz5hgP3TklOrPmGA_dOX3ln_oHv5YuhX250lLRm0JBPuKpqe31Z4HZ16Ja52rk" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              GIF
                            </div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div class="">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png?_nc_eui2=AeEk5Uo0_KIBgwXmmsyyghULVnUPE18ZZ-dWdQ8TXxln587YF20Rmx9KtKMmM1sr61zfYMzEqmklljhLMd8gb2qt" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              Live Video
                            </div>
                          </div>
                        </button>
                      </div>
                      <div class="col-6 ">
                        <button type="button" class="upload-button-css-for-hover">
                          <div class="d-flex flex-row bd-highlight pb-1 pt-1">
                            <div class="">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png?_nc_eui2=AeEKzjk_mAxodW6oC1PuoZcQMb31Au0h4oAxvfUC7SHigDBYMhFJTeXztZuAQPAAbQ0pdF-9V3glEEVdnDSy5gtT" />
                            </div>
                            <div style="color: rgb(153, 153, 153);" class="ps-2 fw-bold">
                              Life evnet
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </transition>
        </div>
      </AppModal>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import AppSeparatorLine from './AppSeparatorLine.vue';
import AppModal from './AppModal.vue';
import AppButton from './AppButton.vue';

const showModal = ref(false);
const showUploadDiv = ref(false);
const fileInput = ref(null);
const postInput = ref(null);
const postContent = ref('');
const showFirstContent = ref(true);
const showSecondContent = ref(false);

const modalRef = ref(null);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handlePhotosVideosClick = async () => {
  showFirstContent.value = true;
  await nextTick();
  toggleUploadDiv();
};

const toggleUploadDiv = () => {
  showUploadDiv.value = true;
};

const closeUploadDiv = () => {
  showUploadDiv.value = false;
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const files = event.target.files;
  console.log('Selected files:', files);
};

const isPostEnabled = computed(() => postContent.value.trim().length > 0);

const handleSwap = async () => {
  showUploadDiv.value = false;
  await nextTick();
  showFirstContent.value = false;
  await nextTick(); 
  showSecondContent.value = true;
};

const handleBack = async () => {
  showSecondContent.value = false;
  await nextTick();
  showFirstContent.value = true;
};

const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    closeModal();
    showFirstContent.value=true;
  }
};

watch(showModal, async (newVal) => {
  console.log({ newVal });
  if (newVal) {
    await nextTick();
    postInput.value.focus();
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    showUploadDiv.value = false;
    document.removeEventListener('mousedown', handleClickOutside);
  }
});

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
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
  margin-bottom: 3%;
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

.upload-div:hover {
  background-color: rgb(100, 100, 100);
}

.upload-img {
  margin-bottom: 10px;
}

.upload-text {
  color: white;
}

.like-input-field-div {
  background-color: rgb(71, 71, 71);
  border: none;
  border-radius: 20px;
  height: 35px;
  padding-left: 10px;
  color: rgb(110, 110, 110);
  outline: none;
  text-align: left;
}

.like-input-field-div:hover {
  background-color: rgb(90, 89, 89);
}

.select {
  padding: 8px;
  font-size: 16px;
}

.dropdown-css {
  background-color: rgb(78, 77, 77);
  border-radius: 5px;
  border: none;
  color: rgb(202, 202, 202);
}

.dropdown-css:focus {
  outline: none;
}

.outline {
  border: 1px solid rgb(71, 71, 71);
  border-radius: 10px;
}

.add-post-button {
  border: none;
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-post-text {
  color: rgb(202, 202, 202);
  text-align: center;
}

.upload-button-css {
  border: none;
  background-color: transparent;
}

.upload-button-css-for-hover{
  border: none;
  background-color: transparent;
  width: 100%;
}

.upload-button-css-for-hover:hover{
  background-color: rgb(73, 73, 73);
  border-radius: 10px;
}

.to-round-upload-button {
  width: 35px;
  height: 30px;
}

.to-round-upload-button:hover {
  background-color: rgb(88, 88, 88);
  border-radius: 100px;
}

.div-closer {
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

.div-closer:hover {
  background-color: rgb(88, 88, 88);
}

/* Additional styles for the disabled button */
.post-button {
  background-color: rgb(0, 183, 255);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.post-button.disabled {
  background-color: rgb(153, 153, 153);
  cursor: not-allowed;
}

.back-arrow {
  background-size: contain;
  border: none;
  height: 24px;
  width: 24px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 20px;
}

.back-arrow:hover {
  background-color: rgb(88, 88, 88);
}

.modal-close {
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

.modal-close:hover {
  background-color: rgb(88, 88, 88);
}

</style>
