<template>
    <div class="template-container">
        <div class="container p-200px">
            <div class="row">
                <div class="col pt-10">

                    <div class="w-100">
                        <img class="h-106px" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
                    </div>

                    <p class="font-css pt-4 ">Facebook helps you connect and share with the people in your life.</p>

                </div>
                <div class="col d-flex justify-content-end">

                    <div class="form-container">
                        <form>
                            <InputForm for="email" type="email" placeholder="Email address or phone number" />
                            <InputForm for="password" type="password" placeholder="Password" />
                        </form>
                        <SimpleButton text="Log in" color="#0866ff" width="362px" fontsize="20px" />
                        <div class="d-flex justify-content-center">
                            <NuxtLink class="link-font" to="/identify">Forgotten password?</NuxtLink>
                        </div>
                        <div><hr></div>
                        <SimpleButton class="d-flex justify-content-center" text="Create new account" color="#42b72a" fontsize="16px" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style scoped >
    .template-container
    {
        background-color: #f0f2f5;
    }
    .p-200px
    {
        padding: 100px 100px;
    }
    
    .pt-10
    {
        padding-top: 10%;
    }

    .h-106px
    {
        height: 106px;
        margin: -28px
    }

    .font-css
    {
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

    .link-font
    {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-decoration: none;
    }

    .link-font:hover
    {
        text-decoration: underline;
    }

</style>