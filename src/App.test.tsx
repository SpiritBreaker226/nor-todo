import React from 'react'

import { Provider } from 'react-redux'

import { waitFor, screen, render, fireEvent } from '@testing-library/react'

import { store } from './app/store'

import App from './App'

describe('App', () => {
  describe('when fetching order data', () => {
    beforeEach(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    })

    it('renders app component', () => {
      expect(screen.getByRole('img')).toBeVisible()
      expect(screen.getByRole('main')).toMatchSnapshot()
    })
  })
})
