<template>
    <div class="content-main-page">
        <div class="image">
            <a href=""><img src="../assets/images/logo-standalone.png" alt="Split-logo" style="width: 100px; height: auto"></a>
        </div>
        <div class="reserve">
            <a href=""><i class="fas fa-phone"></i> +38(077)-77-77-777 Reserve</a>
            <router-link :to="{name: 'Dish'}" v-if="user">
                <i class="fas fa-shopping-basket"></i> Continue shopping
            </router-link>
        </div>
        <div class="social">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-telegram"></i>
        </div>
        <div class="checkout-box">
            <ul class="checkout-list">
                <transition-group name="fade">
                    <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
                        <img :src="'http://127.0.0.1:8000' + product.image" alt="" class="product-image">
                        <h3 class="product-name">{{ product.name }}</h3>
                        <span class="product-price">${{ product.price }}</span>
                        <button class="product-remove" @click="remove(index)">X</button>
                    </li>
                </transition-group>
            </ul>
            <div v-if="!hasProduct()" class="checkout-message">
                <h3>No products...</h3>
                <router-link :to="{name: 'Home'}">Back to list of products</router-link>
            </div>
            <div class="results">
                <router-link :to="{name: 'Submit'}" class="total sub" v-if="hasProduct()">Confirm order</router-link>
                <h3 class="total" v-if="hasProduct()">
                    Total: ${{ totalPrice() }}
                </h3>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';
    export default {
        name: 'Checkout',
        computed: {
            ...mapGetters([
                'getProductsInCart',
            ]),
            ...mapState(['user']),
        },
        methods: {
            ...mapActions([
                'removeProduct',
            ]),
            hasProduct() {
                return this.getProductsInCart.length > 0;
            },
            totalPrice() {
                var total_price = 0
                for (var i = 0; i < this.getProductsInCart.length; i++){
                    total_price += parseInt(this.getProductsInCart[i].price);
                }
                return total_price
            },
            remove(index) {
                this.removeProduct(index);
            },
        },
    };
</script>

<style scoped>
    .checkout-box {
        width: 100%;
        max-width: 900px;
        display: flex;
        flex-direction: column;
        margin: auto;
        box-sizing: border-box;
        padding: 1em;
    }
    .checkout-list {
        padding: 0;
    }
    .checkout-product {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr .5fr;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
        border-radius: 10px;
        list-style: none;
        box-sizing: border-box;
        padding: .8em;
        margin: 1em 0;
    }
    .checkout-product * {
        place-self: center;
    }
    .product-image {
        grid-column: 1/2;
        width: 75%;
    }
    .product-name {
        box-sizing: border-box;
    }
    .product-price {
        font-size: 1.2em;
        font-weight: bold;
    }
    .product-remove {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 0;
        background-color: #E0E0E0;
        color: #fff;
        cursor: pointer;
    }

    .total {
        width: 150px;
        font-size: 18px;
        font-weight: bold;
        align-self: flex-end;
        border-radius: 10px;
        text-decoration: none;
    }

    .checkout-message {
        font-size: 1.5em;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to {
        transform: translateX(-40px);
        opacity: 0;
    }

    .results{
        display: flex;
        flex-direction: row;
    }


    .sub{
        transform: translateY(-19px);
        width: 200px;
        position: relative;
        font-size: 18px;
        margin-right: 15px;
        transition: .3s
    ;
    }
    .sub:hover{
        background-color: #2c2c54;
        color: #f7f1e3;
    }


</style>