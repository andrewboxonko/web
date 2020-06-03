<template>
    <div class="nav-bar" >
        <div class="menu">
            <a href="javascript:void(0)"><i class="menu_close menu-icons fa fa-times fa-lg"></i></a>
            <a href="javascript:void(0)"><i class="menu_open menu-icons fa fa-bars fa-lg"></i></a>
        </div>
        <nav>
            <ul class="menu_items">
                <li class="home-li">
                    <router-link :to="{name: 'Home'}">
                        <i class="icon icon-home fas fa-home"></i>Home
                    </router-link>
                </li>
                <li class="menu-li test-class">
                    <router-link :to="{name: 'Menu'}">
                        <i class="icon icon-menu fas fa-hamburger"></i>Menu
                    </router-link>
                </li>
                <li class="login-li" v-if="user">
                    <router-link :to="{name: 'Logout'}">
                        <i class="icon icon-log fas fa-sign-out-alt"></i>Logout
                    </router-link>
                </li>
                <li class="login-li" v-if="!user">
                    <router-link class="color" :to="{name: 'Login'}">
                        <i class="icon icon-log fas fa-sign-in-alt"></i>Login
                    </router-link>
                </li>
                <li class="phone-li">
                    <router-link :to="{name: 'Contact'}">
                        <i class="icon icon-phone fas fa-phone"></i>Contact info
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import $ from 'jquery'
    // import { mapState } from 'vuex'
    import '../assets/css/style.css'

    export default {
        name: 'Nav',
        // computed: mapState(['user']),
        mounted(){
            $( ".menu" ).click(function() {
                $( ".content-main-page" ).toggleClass( "change");
                $( ".content-menu-page" ).toggleClass( "change");
                $( ".content-contact-page" ).toggleClass( "change");
                $( this ).toggleClass( "change1");
                $( ".home-li" ).toggleClass( "move-home");
                $( ".menu-li" ).toggleClass( "move-menu");
                $( ".phone-li" ).toggleClass( "move-phone");
                $( ".login-li" ).toggleClass( "move-login");
                $( ".body" ).toggleClass( "scroll-bar");
            });

            $( ".test-class").click(function() {
                $( ".content-main-page" ).toggleClass( "change");
                $( ".content-menu-page" ).removeClass( "change");
                $( '.menu' ).toggleClass( "change1");
                $( ".home-li" ).removeClass( "move-home");
                $( ".menu-li" ).removeClass( "move-menu");
                $( ".phone-li" ).removeClass( "move-phone");
                $( ".login-li" ).removeClass( "move-login");
            });

            $( ".home-li").click(function() {
                $( ".content-main-page" ).removeClass( "change");
                $( ".content-menu-page" ).toggleClass( "change");
                $( '.menu' ).toggleClass( "change1");
                $( ".home-li" ).toggleClass( "move-home");
                $( ".menu-li" ).toggleClass( "move-menu");
                $( ".phone-li" ).toggleClass( "move-phone");
                $( ".login-li" ).toggleClass( "move-login");
            });

            $( ".phone-li").click(function() {
                $( ".content-contact-page" ).removeClass( "change");
                $( ".content-menu-page" ).toggleClass( "change");
                $( '.menu' ).toggleClass( "change1");
                $( ".home-li" ).toggleClass( "move-home");
                $( ".menu-li" ).toggleClass( "move-menu");
                $( ".phone-li" ).toggleClass( "move-phone");
                $( ".login-li" ).toggleClass( "move-login");
            });

            $( ".login-li").click(function() {
                $( ".content-contact-page" ).removeClass( "change");
                $( ".content-menu-page" ).toggleClass( "change");
                $( '.menu' ).toggleClass( "change1");
                $( ".home-li" ).toggleClass( "move-home");
                $( ".menu-li" ).toggleClass( "move-menu");
                $( ".phone-li" ).toggleClass( "move-phone");
                $( ".login-li" ).toggleClass( "move-login");
            });

            $( ".color").click(function() {
                $( "html" ).css( "background-color", '#f7f1e3');
                $( "body" ).css( "background-color", '#f7f1e3');
            });
            $( ".color1").click(function() {
                $( "html" ).css( "background-color", '#2c2c54');
                $( "body" ).css( "background-color", '#2c2c54');
            });
            $(document).ready(function () {
                $('html').css("background-color", '#2c2c54');
                $( "body" ).css( "background-color", '#2c2c54');
            });
        }
    }
</script>




