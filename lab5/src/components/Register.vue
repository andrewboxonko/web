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
                    <router-link :to="{name: 'Login'}" class="have_acc color3">
                        Already have an account
                    </router-link>
                </div>
                <div class="right-content">
                    <div class="form-register" >
                        <h1 class="phone-h">Sign up</h1>
                        <input type="text" placeholder="First Name" v-model="fname">
                        <span class="error">{{name_error}}</span>
                        <input type="text" placeholder="Last name"  v-model="lname">
                        <span class="error">{{name_error}}</span>
                        <input type="email" placeholder="Email" v-model="email">
                        <span class="error">{{email_error}}</span>
                        <input type="text"  placeholder="Username" v-model="username">
                        <span class="error">{{username_error}}</span>
                        <input type="password" placeholder="Password" v-model="password">
                        <span class="error">{{password_error}}</span>
                        <input v-model="c_password" type="password" placeholder="Confirm password">
                        <span class="error">{{c_password_error}}</span>
                        <router-link :to="{name: 'Login'}" class="phone-have-acc">
                            Already have an account
                        </router-link>
                        <div class="pos-btn position">
                            <router-link :to="{name: 'Home'}" class="cancel color1">
                                Cancel
                            </router-link>
                            <button v-on:click="submit()" class="btn">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script>
    import qs from 'qs'
    import $ from "jquery";

    export default {
        name: 'Register',
        data() {
            return {
                username: '',
                password: '',
                c_password: '',
                email: '',
                fname: '',
                lname: '',
                username_error: '',
                password_error: '',
                c_password_error: '',
                email_error: '',
                name_error: '',
                error: '',
            }
        },
        mounted(){
            $( ".color1").click(function() {
                $( "html" ).css( "background-color", '#2c2c54');
                $( "body" ).css( "background-color", '#2c2c54');
            });
            $( ".color3").click(function() {
                $( "html" ).css( "background-color", '#f7f1e3');
                $( "body" ).css( "background-color", '#f7f1e3');
            });
        },
        methods: {
            clear_errors() {
                this.username_error = '';
                this.password_error = '';
                this.c_password_error = '';
                this.email_error = '';
                this.name_error = '';
                this.error = ''
            },
            validate() {
                this.clear_errors();
                let is_valid = true;
                const username_validator = new RegExp('^[\\w]+$');
                const email_validator = new RegExp('.+@.+\\..+');
                const name_validator = new RegExp('^([a-zA-Z]+)([a-zA-Z ]+)([a-zA-Z]+)$');
                if (this.username.length < 3 || !this.username.match(username_validator) || this.username.length > 20) {
                    this.username_error = 'Required: length 3-20 only letters, digits, _';
                    is_valid = false;
                }
                if (!this.email.match(email_validator)) {
                    this.email_error = 'Please, enter valid email';
                    is_valid = false;
                }
                console.log(this.fname)
                console.log(this.fname.match(name_validator))
                if (!(this.fname.match(name_validator) && this.lname.match(name_validator))) {
                    this.name_error = 'Required: only letters and spaces';
                    is_valid = false;
                }
                if (this.password.length < 6 || this.password.length > 30) {
                    this.password_error = 'Required: length 6-30 characters';
                    is_valid = false;
                }
                if (this.password !== this.c_password) {
                    this.c_password_error = 'Passwords don\'t match';
                    is_valid = false;
                }
                return is_valid;
            },
            submit() {
                if (!this.validate()) {
                    return;
                }
                this.$api.post('auth/register/', qs.stringify({
                    username: this.username,
                    password: this.password,
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname,
                }), {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    }
                }).then(response => {
                    if (response.data.response === 'EMAIL_TAKEN') {
                        this.email_error = 'Email is already taken';
                    } else if (response.data.response === 'USERNAME_TAKEN') {
                        this.username_error = 'Username is already taken';
                    } else if (response.data.response === 'OK') {
                        this.$router.push({name: 'Home'})
                    } else {
                        this.error = 'Unexpected error happened. Please contact us or try again later'
                    }
                }).catch(e => {
                    console.log(e);
                    this.error = 'Unexpected error happened. Please contact us or try again later'
                });
            }
        }
    }
</script>

<style scoped>
    ::placeholder{
        color: #666666;
        font-family: "Inconsolata", monospace;
        text-transform: uppercase;
    }

    .error{
        text-align: center;
        font-size: 13px;
        display: inline-block;
        color: #e52424;
        width: 300px;
    }
</style>