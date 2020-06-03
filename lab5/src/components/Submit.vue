<template>
    <div class="content-main-page">
        <div class="image">
            <a href=""><img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto"></a>
        </div>
        <div class="reserve">
            <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
        </div>
        <div class="social">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-telegram"></i>
        </div>
        <h3>Thanks for your order</h3>
        <router-link :to="{name: 'Home'}" class="total sub">Go to main page</router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'Submit',
        computed: {
            ...mapState(['user']),
        },
    };
</script>


<style scoped>
    h3{
        color: #000;
    }
    .sub{
        color: black;
        border-radius: 15px;
        text-decoration: none;
        transition: .3s
    ;
    }
    .sub:hover{
        background-color: #2c2c54;
        color: #f7f1e3;
    }
    
    
</style>
