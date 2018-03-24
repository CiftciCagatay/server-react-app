import React from 'react'
import Router from './Router'
import SideMenu from './containers/SideMenu'

export default () => {
  return (
    <SideMenu>
      <Router />
    </SideMenu>
  )
}
