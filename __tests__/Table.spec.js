import { shallowMount } from '@vue/test-utils'
import Table from '../src/views/Table'

describe('v-data-table dessert table', () => {

  const wrapper = shallowMount(Table);
  const desser_table = wrapper.findComponent({ ref: 'dessert table' });
  const data = {
    headers: [
      { text: "Dessert (100g serving)", value: "name",},
      { text: "Calories", value: "calories" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
    ],
  }

  it('exists', () => {
    expect(desser_table.exists()).toBe(true)
  });

  it('receives data correctly', async () => {
    await wrapper.setData(data)
    expect(desser_table.props('headers')).toHaveLength(2);
    expect(desser_table.props('items')).toHaveLength(1);
    expect(desser_table.props().items[0].name).toBe(data.desserts[0].name)
  });

})
