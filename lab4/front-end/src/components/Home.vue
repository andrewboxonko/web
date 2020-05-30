<template>
    <div class="content-main-page" id="menu">
        <div class="image">
            <router-link :to="{name: 'Home'}">
                <img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto">
            </router-link>
        </div>

        <div class="reserve">
            <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
            <router-link :to="{name: 'Dish'}" v-if="user">
                <i class="fas fa-shopping-basket"></i> Order online
            </router-link>
        </div>

        <div class="textarea">
            <h1 v-if="user">{{user.username.charAt(0).toUpperCase() + user.username.slice(1)}}, welcome to split</h1>
            <h1 v-else>Welcome to split</h1>
            <div class="social">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-telegram"></i>
            </div>
            <p>In the heart of the old town you will find an oasis of relaxation, where all senses awaken.
                The atmosphere of the institution is created with a combination of classics and
                modernity in the interior. The exquisite design of the premium loft-style design will
                facilitate relaxation and communication.
                All design elements are exclusive custom made items.</p>
        </div>
        <div class="row">
            <div class="column">
                <div class="pos-sign">Karaoke</div>
                <a class='read-more-link' href=""><img src="../assets/images/caraoke.jpg" alt="Snow" style="width:100%"></a>
                <div class="pos-read1 read-more"><a href="">Read more</a></div>
            </div>
            <div class="column">
                <div class="pos-sign">Restaurant</div>
                <a class='read-more-link' href=""><img src="../assets/images/zoi.jpg" alt="Forest" style="width:100%"></a>
                <div class="pos-read2 read-more"><a href="">Read more</a></div>
            </div>
            <div class="column">
                <div class="pos-sign">Night club</div>
                <a class='read-more-link' href=""><img src="../assets/images/party.jpg" alt="Mountains" style="width:100%"></a>
                <div class="pos-read3 read-more"><a href="">Read more</a></div>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from "vuex";
    export default {
      name: 'Home',
        computed: mapState(['user']),
    }
</script>





