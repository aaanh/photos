import { render } from '@redwoodjs/testing/web'

import Gallery from './Gallery'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Gallery', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Gallery />)
    }).not.toThrow()
  })
})
