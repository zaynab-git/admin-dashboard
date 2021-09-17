import { shallowMount } from '@vue/test-utils'
import Table from '../src/views/Table'

test('simple test', () => {
  // render the component
  const wrapper = shallowMount(Table);

  expect(wrapper.vm.$data).toBeDefined

})
