import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DeviceList from './containers/DeviceList'
import Report from './containers/Report'

export default () => {
  return (
    <Switch>
      <Route path="/reports" component={Report} />
      <Route path="/settings" component={DeviceList} />
      <Route path="/contact" component={DeviceList} />
      <Route path="/about" component={DeviceList} />
      <Route path="/" component={DeviceList} />
    </Switch>
  )
}
