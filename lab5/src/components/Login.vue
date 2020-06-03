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
                <router-link :to="{name: 'Register'}" class="have_acc white color2">
                    Don't have an account
                </router-link >
            </div>
            <div class="right-content1">
                <div class="form-login">
                    <h1 class="phone-h additional">Login</h1>
                    <input type="text" name="username" placeholder="Username" v-model="username" class="white1" style="padding: 10px">
                    <input type="password" name="password" placeholder="Password" v-model="password" style="padding: 10px">
                    <span class="error">{{error}}</span>

                    <div class="pos-btn position" style="bottom: -50%">
                        <router-link :to="{name: 'Home'}" class="cancel color1 white">
                            Cancel
                        </router-link>
                        <button v-on:click="login()" id="login" class="btn white">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    </html>

</template>


<script>
    import '../assets/css/login.css'
    import $ from "jquery";

    export default {
        name: 'Login',
        data() {
            return {
                username:'',
                password: '',
                error: ''
            }
        },
        methods: {
            login() {
                if (!this.username || !this.password) {
                    this.error = 'Please, fill both fields!';
                    return;
                }
                this.$store.dispatch('obtainToken', {username: this.username, password: this.password})
                    .then(() => {
                        this.$router.push({name: 'Home'})
                    })
                    .catch(e => {
                        this.error = 'Please, check your credentials and try again!';
                        console.log(e);
                    })
            }
        },
        mounted(){
            $( ".color1").click(function() {
                $( "html" ).css( "background-color", '#2c2c54');
                $( "body" ).css( "background-color", '#2c2c54');
            });

            $( ".color2").click(function() {
                $( "html" ).css( "background-color", '#ffb8b8');
                $( "body" ).css( "background-color", '#ffb8b8');
            });
        },
    }
</script>


<style scoped>
    ::placeholder{
        color: #666666;
        font-family: "Inconsolata", monospace;
        text-transform: uppercase;
    }

    .error{
        bottom: -17%;
        position: absolute;
        text-align: center;
        font-size: 13px;
        display: inline-block;
        color: #e52424;
        width: 300px;
    }

    .white{
        color: #f7f1e3;
    }
</style>

