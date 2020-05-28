<template>
        <div class="register" >
            <div class="container">
                <i class="fas fa-circle red"></i>
                <i class="fas fa-circle yellow"></i>
                <i class="fas fa-circle green"></i>
                <i class="fas fa-circle grey1"></i>
                <i class="fas fa-circle grey2"></i>
                <i class="fas fa-circle grey3"></i>
                <div class="left-content">
                    <h1 class="sign">Sign up</h1>
                    <i class="users-icon fas fa-users"></i>
                    <a class="have_acc" href="login.html">Already have an account</a>
                </div>
                <div class="right-content">
                    <form class="form-register" @submit.prevent="registerUser">
                        <h1 class="phone-h">Sign up</h1>
                        <input type="text" name="Name" placeholder="First Name" v-model="name">
                        <input type="text" name="l_name" placeholder="Last name">
                        <input type="email" name="mail" placeholder="Email" v-model="email">
                        <input type="text" name="ur" id="ur" placeholder="Username" v-model="username">
                        <input type="number" name="phone" placeholder="Phone" autocomplete="off">
                        <input type="password" name="pwr" id="pwr" placeholder="Password" v-model="password">
                        <a href="login.html"><p class="phone-have-acc">Already have account</p></a>
                        <div class="pos-btn">
                            <router-link :to="{name: 'Home'}" class="cancel">
                                Cancel
                            </router-link>
                            <input type="submit" value="Create" class="btn">
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>


<script>
    export default {
        name: 'Register',
        data () {
            return {
                name: '',
                email: '',
                username: '',
                password: '',
                confirm: ''
            }
        },
        methods: {
            registerUser () {
                this.$store.dispatch('registerUser', {
                    name: this.name,
                    email: this.email,
                    username: this.username,
                    password: this.password,
                    confirm: this.confirm
                }).then(() => {
                    this.$router.push({ name: 'Login' })
                })
            }
        }
    }
</script>