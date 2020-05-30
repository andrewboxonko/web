<template>
    <div class="content-main-page">
        <div class="image">
            <a href=""><img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto"></a>
        </div>
        <div class="reserve">
            <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
            <router-link :to="{name: 'Dish'}" v-if="user">
                <i class="fas fa-shopping-basket"></i> Order online
            </router-link>
        </div>
        <div class="social">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-telegram"></i>
        </div>
        <Category></Category>
        <div id="main" class="product-list ">
                <div class="container-dishes" id='list' style="display: flex; flex-direction: row"
                     v-for="(item, index) in info.dishes" :key="index">
                <div class="item">
                    <router-link to="/dish-details">
                        <img :src="'http://127.0.0.1:8000' + item.image" alt=""
                             @click="addCurrentProduct(item)">
                        <p @click="addCurrentProduct(item)">{{item.name}}</p>
                    </router-link>
                    <p>${{item.price}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import axios from 'axios'
    import { mapActions } from 'vuex';
    import '../assets/css/style-online.css'
    import Category from "@/components/Category";


    export default {
        components: {
            Category,
        },

        name: "Dish",

        data() {
            return {
                info: null
            }
        },
        mounted(){
            axios
                .get('http://127.0.0.1:8000/api/dishes/')
                .then(response => (this.info = response.data));
        },
        computed: mapState(['user']),
        methods: {
            ...mapActions([
                'addProduct',
                'currentProduct',
            ]),
            addProductToCart(product) {
                this.addProduct(product);
            },
            addCurrentProduct(product) {
                this.currentProduct(product);
            },
        },

    }
</script>

