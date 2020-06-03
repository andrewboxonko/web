import {shallowMount, createLocalVue} from "@vue/test-utils";
import Register from "../../src/components/Register";

let wrapper;
describe('Register test', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()

        wrapper = shallowMount(Register, {
            localVue,
            router,
            stubs: ['router-link']
        })
    })


    it('Check if form is submitted', () => {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('#register').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    })
});

