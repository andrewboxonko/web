<template>
    <div class="cont-category">
        <router-link :to="{name: 'Dish'}" class="link">All</router-link>
        <div class="categories"
             v-for="(item, index) in info.categories" :key="index">
            <nav>
                <router-link v-if="item.name === 'Tea'" :to="{name: 'Tea'}" class="link">{{item.name}}</router-link>
                <router-link v-if="item.name === 'Sushi'" :to="{name: 'Sushi'}" class="link">{{item.name}}</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Category",
        data() {
            return {
                info: null
            }
        },
        mounted(){
            axios
                .get('http://127.0.0.1:8000/api/category/')
                .then(response => (this.info = response.data));
        },
    }
</script>

<style scoped>
    .cont-category{
        margin-left: 30px;
        padding-top: 15px;
        display: flex;
        flex-direction: row;
    }

    nav{
        margin-left: 20px;
        display: flex;
        width: 100%;
    }
    .link{
        cursor: pointer;
        font-size: 16px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: black;
        text-align: center;
        border-radius: 15px;;
        padding: 10px;
        margin-left: 5px;
        width: 150px;
        text-decoration: none;
        background-color: #ffb8b8;
        transition: .3s;
    }
    .link:hover{
        background-color: #2c2c54;
        color: #f7f1e3;
    }

</style>