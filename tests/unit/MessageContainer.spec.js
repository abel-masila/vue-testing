import { mount } from '@vue/test-utils'
import MessageContainer from '@/components/MessageContainer'

describe('MessageContainer', () => {
  it('Wraps the MessageDisplay component', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
      }
    })
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  })
})
