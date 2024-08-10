<template>
    <div>
        <nav class="nav-css d-flex align-items-center justify-content-between w-100">
            <div class="d-flex align-items-center">
                <img class="ps-3" src="/assets/images/facebook-logo.png" />
                <div class="search-wrapper">
                    <AppRoundedInput placeholder="Search Facebook" />
                    <Icon class="search-icon" name="material-symbols:search" color="grey" />
                </div>
            </div>
            <div class="d-flex align-items-center me-2">
                <div class="messenger-icon-div d-flex justify-content-center mt-1 mb-1">
                    <Icon class="messenger-icon-css pb-1" name="mdi:facebook-messenger" color="lightgrey" />
                </div>
                <img class="profile-display-css ps-1 mt-1 mb-1" src="/assets/images/no-disp.png" />
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav-css {
        background-color: rgb(43, 42, 42);
        height: 55px;
        display: flex;
        align-items: center;
    }

    .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 10px;
    }

    .search-icon {
        position: absolute;
        left: 10px;
    }

    .messenger-icon-div {
        border: 2px solid rgb(71, 71, 71);
        border-radius: 50%;
        height: 45px;
        width: 45px;
        background-color: rgb(71, 71, 71);
    }

    .messenger-icon-css {
        height: 45px;
        width: 30px;
    }

    .profile-display-css {
        width: 50px;
        height: 45px;
    }
</style>
