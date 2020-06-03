import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


import {mount, createLocalVue } from "@vue/test-utils"
import App from "../../src/App";
import VueRouter from "vue-router"
import Nav from "../../src/components/Nav";
import Category from "../../src/components/Category";
import Home from "../../src/components/Home";
import router from "../../src/router";


localVue.use(VueRouter)

describe("App", () => {
  it("check if Nav exists", () => {
    const wrapper = mount(App, { localVue, router })

    router.push("/login")

    expect(wrapper.findComponent(Nav).exists()).toBe(true)
  })
})


describe("Category",  () =>{
  it('check', async ()=>{
    const wrapper = mount(Category)
    expect(wrapper.vm.$data.is_active).toBe(false)
  })
})


const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: 'admin'
  },
})

it("check if admin is logged", () => {
  const wrapper = mount(Home, { store, localVue })
  expect(wrapper.find(".username").text()).toBe("admin")
})












