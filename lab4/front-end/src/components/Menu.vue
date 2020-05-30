<template>
<div class="content-menu-page">
    <div class="image">
        <router-link :to="{name: 'Home'}">
            <img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto">
        </router-link>
    </div>
    <div class="social social-disappear">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-telegram"></i>
    </div>
    <div class="reserve">
        <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
        <router-link :to="{name: 'Dish'}" v-if="user">
            <i class="fas fa-shopping-basket"></i> Order online
        </router-link>
    </div>
    <nav>
        <router-link :to="{name: 'Menu'}" class="active">
            Night club
        </router-link>
        <router-link :to="{name: 'MenuRest'}">
            Restaurant
        </router-link>
        <router-link :to="{name: 'MenuWine'}">
            Wine card
        </router-link>
        <router-link :to="{name: 'MenuBar'}">
            Bar card
        </router-link>
    </nav>
    <div class="slideshow">
        <div class="class1">
            <img src="../assets/images/1.png" style="width:100%" alt="menu-image">
        </div>
    </div>
    <div class="phone-version">
        <img src="../assets/images/phone1.png" alt="menu" style="width: 100%; height: auto">
        <hr>
        <img src="../assets/images/phone11.png" alt="menu" style="width: 100%; height: auto">
        <hr>
        <img src="../assets/images/phone111.png" alt="menu" style="width: 100%; height: auto">
    </div>
    <div class="empty" style="width: 100%; height: 150px"></div>
</div>
</template>

<script>
    import '../assets/css/menu-rest.css'
    import {mapState} from "vuex";

    export default {
        name: 'Menu',
        computed: mapState(['user']),
    }
</script>