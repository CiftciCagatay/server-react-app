import React from 'react'
import ReactDOM from 'react-dom'

import Sidebar from 'react-sidebar'
import MaterialTitlePanel from './material_title_panel'
import SidebarContent from './sidebar_content'

import './Sidemenu.css'

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    padding: '16px'
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
    this.onPressMenuItem = this.onPressMenuItem.bind(this)

    this.state = {
      docked: true,
      open: true,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30,
      navBarTitle: 'Ana Sayfa'
    }
  }

  onSetOpen(open) {
    this.setState({ open, docked: open })
  }

  onPressMenuItem = title =>
    this.setState({ open: false, navBarTitle: title || this.state.navBarTitle, docked: false })

  menuButtonClick() {
    this.onSetOpen(!this.state.open)
  }

  render() {
    const sidebar = <SidebarContent onPressMenuItem={this.onPressMenuItem} />

    const contentHeader = (
      <span>
        <span>{this.state.navBarTitle}</span>
      </span>
    )

    const sidebarProps = {
      sidebar,
      docked: false && this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    }

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div className="sidemenu-button" onClick={this.menuButtonClick} />
          <div style={styles.content}>{this.props.children}</div>
        </MaterialTitlePanel>
      </Sidebar>
    )
  }
}
