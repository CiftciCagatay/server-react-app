import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './configureStore'
import Router from './Router'
import SideMenu from './sidemenu'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore({}, [thunk])}>
        <BrowserRouter>
          <SideMenu>
            <Router />
          </SideMenu>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
