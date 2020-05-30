import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

const base = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

Vue.use(Vuex)
Vue.use({
    install (Vue) {
        Vue.prototype.$api = base;
    }
})

export default new Vuex.Store({
    state: {
        plugins: [createPersistedState({
            storage: window.sessionStorage,
        })],
        jwt: localStorage.getItem('token') || null,
        user: localStorage.getItem('user'),
        endpoints: {
            obtainJWT: 'auth/obtain_token/',
            refreshJWT: 'auth/refresh_token/',
        },
        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
    },
    getters: {
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
    },
    mutations: {
        updateToken(state, newToken) {
            localStorage.setItem('token', newToken);
            state.jwt = newToken;
        },
        removeToken(state) {
            localStorage.removeItem('token');
            state.jwt = null;
        },
        updateUser(state, token) {
            localStorage.setItem('user', jwt_decode(token));
            state.user = jwt_decode(token);
        },
        removeUser(state) {
            localStorage.removeItem('user');
            state.user = null;
        },
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
    },
    actions: {
        // run the below action to get a new access token on expiration
        obtainToken(context, credentials) {
            const username = credentials.username;
            const password = credentials.password;
            const payload = {
                username: username,
                password: password,
            }

            return new Promise((resolve, reject) => {
                base.post(this.state.endpoints.obtainJWT, payload)
                    .then(response => {
                        this.commit('updateToken', response.data.token);
                        this.commit('updateUser', response.data.token);
                        resolve();
                    })
                    .catch(e => {
                        console.log(e);
                        reject(e);
                    })
            })
        },
        logoutUser() {
            this.commit('removeToken');
            this.commit('removeUser');
        },
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHiddenPopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
    }
})