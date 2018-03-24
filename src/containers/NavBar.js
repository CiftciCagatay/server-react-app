import React from 'react'

export default props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <button onClick={props.toggleDrawer} className="navbar-brand">
        Server Odası Takip
      </button>
    </nav>
  )
}
