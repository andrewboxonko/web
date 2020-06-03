import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "../../src/components/Login";
import VueRouter from "vue-router";
import Vuex from 'vuex'



describe('Login test', () => {
    let actions
    let store
    let wrapper

    beforeEach(() => {
        const localVue = createLocalVue()
        const router = new VueRouter()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        actions = {
            obtainToken: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
        wrapper = shallowMount(Login, {
            store,
            localVue,
            router,
            stubs: ['router-link']
        })
    })

    it('Check for empty field error message', async () => {
        await wrapper.find('#login').trigger('click')
        expect(wrapper.vm.$data.error_message).toBe('Please, fill both fields!')
    })

    it('Check for login call', async () => {
        await wrapper.setData({username: 'test', password: 'test'})
        await wrapper.find('#login').trigger('click')
        expect(actions.obtainToken).toHaveBeenCalled()
    })

    it('check if header is correct', () => {
        expect(wrapper.find('.log').text()).toBe('Login')
    });
})


