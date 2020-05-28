<template>
    <html class="main">
    <body class="main">
    <div class="login">
        <div class="container">
            <i class="fas fa-circle red"></i>
            <i class="fas fa-circle yellow"></i>
            <i class="fas fa-circle green"></i>
            <i class="fas fa-circle grey1"></i>
            <i class="fas fa-circle grey2"></i>
            <i class="fas fa-circle grey3"></i>
            <div class="left-content">
                <h1 class="log">Login</h1>
                <i class="users-icon users-icon-log fas fa-users"></i>
                <router-link :to="{name: 'Register'}" class="have_acc white">
                    Don't have an account
                </router-link >
            </div>
            <div class="right-content1">
                <form class="form-login" v-on:submit.prevent="loginUser">
                    <h1 class="phone-h additional">Login</h1>
                    <p v-if="wrongCred" class="wrong">Wrong username/password!</p>
                    <input type="text" name="username" placeholder="Username" v-model="username" class="white1">
                    <input type="password" name="password" placeholder="Password" v-model="password">
                    <div class="pos-btn additional2">
                        <router-link :to="{name: 'Home'}" class="cancel-log">
                            Cancel
                        </router-link >
                        <input type="submit" value="Login" class="btn">
                    </div>
                </form>
            </div>
        </div>
    </div>
    </body>
    </html>

</template>


<script>
    import '../assets/css/login.css'

    export default {
        name: 'Login',
        data () {
            return {
                username: '',
                password: '',
                wrongCred: false // activates appropriate message if set to true
            }
        },
        methods: {
            loginUser () { // call loginUSer action
                this.$store.dispatch('loginUser', {
                    username: this.username,
                    password: this.password
                })
                    .then(() => {
                        this.wrongCred = false
                        this.$router.push({ name: 'Home' })
                    })
                    .catch(err => {
                        console.log(err)
                        this.wrongCred = true // if the credentials were wrong set wrongCred to true
                    })
            }
        }
    }
</script>
<style scoped>
    .main{
        background-color: #f7f1e3;
    }
</style>


