<template>
    <div>
        <AppHeader />
        <div class="main-container">

            <div>

                <div class="row">

                    <div class="col">
                        <AppSidebar />
                    </div>

                    <div class="col">
                        <AppPostCreation />
                    </div>

                    <div class="col">
                        <AppSponsored />
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped >
    .main-container
    {
        background-color: rgb(34, 33, 33);
        height: 100vh;
    }
</style>