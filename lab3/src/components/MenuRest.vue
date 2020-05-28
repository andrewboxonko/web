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
        </div>
        <nav>
            <router-link :to="{name: 'Menu'}">
                Night club
            </router-link>
            <router-link :to="{name: 'MenuRest'}" class="active">
                Restaurant
            </router-link>
            <router-link :to="{name: 'MenuWine'}">
                Wine card
            </router-link>
            <router-link :to="{name: 'MenuBar'}" >
                Bar card
            </router-link>
        </nav>
        <div class="slideshow">
            <div class="class1">
                <img src="../assets/images/1.1.png" style="width:100%" class="item1" id="switch">
            </div>
        </div>
        <div class="phone-version">
            <img src="../assets/images/phone2.png" alt="menu" style="width: 100%; height: auto">
            <hr>
            <img src="../assets/images/phone22.png" alt="menu" style="width: 100%; height: auto">
            <hr>
            <img src="../assets/images/phone222.png" alt="menu" style="width: 100%; height: auto">
        </div>
        <div class="empty" style="width: 100%; height: 150px"></div>
    </div>
</template>

<script>
    export default {
        name: 'MenuRest',
    }


</script>