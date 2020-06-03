<template>
    <div class="content-contact-page">
        <div class="image">
            <a href="index.html"><img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto"></a>
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
        <h1 class="contact-header">Contact information</h1>
        <div class="info-container">
            <div class="info">
                <p><strong>Address:</strong> Lviv, Sq. Mickiewicz, 6/7.</p>
                <p><strong>Phone:</strong> +38 (032) 242-22-00</p>
                <p><strong>E-mail:</strong> club@split.lviv.ua</p>
            </div>
            <div class="map" id="map">
            </div>
        </div>
        <div class="empty" style="width: 100%; height: 150px"></div>
    </div>
</template>


<script>
    import '../assets/css/contact.css'
    import {mapState} from "vuex";

    export default {
        name: 'Contact',
        computed: mapState(['user']),
    }
</script>