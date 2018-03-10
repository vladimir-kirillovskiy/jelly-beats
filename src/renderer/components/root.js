import { h } from 'preact'
import { Provider } from 'preact-redux'
import PropTypes from 'prop-types'

import routes from '../routes'
import store from '../store'

import App from './app'
import Router from './router'

const Root = () => (
  <Provider store={store}>
    <App>
      <Router routes={routes} />
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  page: PropTypes.func,
}

export default Root