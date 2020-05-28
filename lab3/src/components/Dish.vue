<template>
    <div class="content-main-page">
        <div class="image">
            <a href="index.html"><img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto"></a>
        </div>
        <div class="reserve">
            <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
            <router-link :to="{name: 'Dish'}" v-if="accessToken!=null">
                <i class="fas fa-shopping-basket"></i> Order online
            </router-link>
        </div>
        <div class="social">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-telegram"></i>
        </div>
        <div id="sidebar" class="nav-category" v-for="(name, index) in getUnique" :key="index">
            <h2>Categories</h2>
            <p>{{name}}</p>
        </div>
        <div id="main" class="product-list">
            <div class="container-dishes" id='list' style="display: flex; flex-direction: row"
                 v-for="(item, index) in info.dishes" :key="index">
                <div class="item">
                <img :src="'http://127.0.0.1:8000' + item.image" alt="">
                <p>{{item.name}}</p>
                <p>${{item.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import axios from 'axios'
    import '../assets/css/style-online.css'

    export default {
        name: "Dish",
        data() {
            return {
                url: 'http://127.0.0.1:8000/',
                info: null
            }
        },
        mounted(){
            axios
                .get('http://127.0.0.1:8000/api/dishes/')
                .then(response => (this.info = response.data));
        },
        computed: mapState(['accessToken']),
        methods:{
            getUnique(){
                const ages = []
                for (let i = 0; i < this.info.length; i++){
                    ages.push(this.info[i].category.name)
                }
                return [...new Set(ages)];
            }
        }

    }
</script>

