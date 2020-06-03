import { shallowMount } from "@vue/test-utils";
import Category from "../../src/components/Category";
import Tea from "../../src/components/Tea";
import Sushi from "../../src/components/Sushi";

beforeEach(() =>{
    wrapper = shallowMount(Category, {
        stubs: ['router-link']
    })
})

describe('Category.vue', () =>{
    it('check if info is null',  ()=> {
        expect(wrapper.vm.$data.info).toBe(null)
    });
})




