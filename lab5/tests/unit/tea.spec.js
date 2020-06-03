import {shallowMount} from "@vue/test-utils";
import Tea from "../../src/components/Tea";

beforeEach(() =>{
    wrapper = shallowMount(Tea, {
        stubs: ['router-link']
    })
})

describe('Tea.vue', () =>{
    it('check if function is called', function () {
        const submit = jest.fn()
        wrapper.setMethods({submit: submit})
        wrapper.find('#test').trigger('click')
        expect(wrapper.vm.submit).toHaveBeenCalled()
    });
})


