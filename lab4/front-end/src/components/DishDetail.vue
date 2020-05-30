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
        <div class="product-box">
            <div class="product-image">
                <img :src="'http://127.0.0.1:8000' + currentProduct.image" alt="" style="height: 300px; width: auto">
            </div>
            <div class="product-info">
                <h2 class="product-title">{{ currentProduct.name }}</h2>
                <p class="product-price">{{ currentProduct.category.name }}</p>
                <p class="product-price">${{ currentProduct.price }}</p>
<!--                <select v-model="selected">-->
<!--                    <option v-for="(num, index) in amount" :key="index">-->
<!--                        {{num}}-->
<!--                    </option>-->
<!--                </select>-->
                <router-link :to="{name: 'Checkout'}">
                    <Button btnColor="btn btn-large btn-sucess" :cartIcon="true"
                            @click.native="addProductToCart(currentProduct)">
                        Buy Now
                    </Button>
                </router-link>

            </div>
        </div>

    </div>
</template>

<script>
    import '../assets/css/style-online.css'
    import {mapGetters, mapActions, mapState} from 'vuex';
    import Button from "@/components/Button";
    export default {
        data(){
            return{
                selected: [],
                amount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            }
        },
        components: {
            Button,
        },
        computed: {
            ...mapGetters({
                currentProduct: 'getCurrentProduct',
            }),
            ...mapState(['user']),

        },
        methods: {
            ...mapActions([
                'addProduct',
                'showOrHiddenModal',
            ]),
            addProductToCart(product) {
                this.addProduct(product);
            },
        },

    };
</script>


<style scoped>
    .product-box {
        width: 100%;
        height: 400px;
        margin: 50px auto;
        box-sizing: border-box;
        padding: 1em;
        background-color: #fff;
        border-radius: 7px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .product-info {
        width: 400px;
        align-self: flex-start;
    }
    .product-title {
        font-weight: normal;
    }
    .product-price {
        font-size: 2em;
        font-weight: bolder;
    }
    .product-box button {
        font-size: 18px;
        font-weight: bold;
        width: 300px;
        margin: .3em 0;
    }
</style>
