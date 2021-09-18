import Profile from '../src/views/Profile'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('v-card profile info', () => {

  let state = {
    user: {
      firstName: "zeynab",
      lastName: "heydarzade",
      email: "me@gmail.com",
      phoneNumber: "12345",
      userName: "zeynab77",
    }
  }
  let store  = new Vuex.Store({
    state
  })

  const wrapper = mount(Profile, { store, localVue });
  const profile_info = wrapper.findComponent({ ref: 'profile info' });

  it('exists', () => {
    expect(profile_info.exists()).toBe(true)
  });

  it('has 5 v-list-item-title', async () => {
    expect(profile_info.findAll('.v-list-item__title')).toHaveLength(5)
  });

  it('displays info correctly', async () => {
    expect(profile_info.findAll('.v-list-item__title').at(0).text()).toContain(state.user.firstName)
    expect(profile_info.findAll('.v-list-item__title').at(1).text()).toContain(state.user.lastName)
    expect(profile_info.findAll('.v-list-item__title').at(2).text()).toContain(state.user.email)
    expect(profile_info.findAll('.v-list-item__title').at(3).text()).toContain(state.user.phoneNumber)
    expect(profile_info.findAll('.v-list-item__title').at(4).text()).toContain(state.user.userName)
  });

})
