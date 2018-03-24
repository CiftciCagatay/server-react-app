import React from 'react'
import ReactDOM from 'react-dom'

import Sidebar from 'react-sidebar'
import MaterialTitlePanel from './material_title_panel'
import SidebarContent from './sidebar_content'

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

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this)
    this.renderPropNumber = this.renderPropNumber.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
    this.closeDrawer = this.closeDrawer.bind(this)

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    }
  }

  onSetOpen(open) {
    this.setState({ open: open })
  }

  menuButtonClick(ev) {
    ev.preventDefault()
    this.onSetOpen(!this.state.open)
  }

  renderPropCheckbox(prop) {
    const toggleMethod = ev => {
      const newState = {}
      newState[prop] = ev.target.checked
      this.setState(newState)
    }

    return (
      <p key={prop}>
        <input
          type="checkbox"
          onChange={toggleMethod}
          checked={this.state[prop]}
          id={prop}
        />
        <label htmlFor={prop}> {prop}</label>
      </p>
    )
  }

  renderPropNumber(prop) {
    const setMethod = ev => {
      const newState = {}
      newState[prop] = parseInt(ev.target.value, 10)
      this.setState(newState)
    }

    return (
      <p key={prop}>
        {prop}{' '}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    )
  }

  closeDrawer = () => {
    this.setState({ open: false })
  }

  render() {
    const sidebar = <SidebarContent closeDrawer={this.closeDrawer} />

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.menuButtonClick}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> React Sidebar</span>
      </span>
    )

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
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
          <div style={styles.content}>{this.props.children}</div>
        </MaterialTitlePanel>
      </Sidebar>
    )
  }
}
