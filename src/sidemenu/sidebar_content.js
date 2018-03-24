import React from 'react'
import MaterialTitlePanel from './material_title_panel'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  return (
    <MaterialTitlePanel title="Menu" style={style}>
      <div style={styles.content}>
        <ul className="list-group">
          <Link onClick={props.closeDrawer} to="/">
            <li className="list-group-item list-group-item-action">
              Ana Sayfa
            </li>
          </Link>

          <Link onClick={props.closeDrawer} to="/reports">
            <li className="list-group-item list-group-item-action">Raporlar</li>
          </Link>
        </ul>

        <div style={styles.divider} />

        <ul className="list-group">
          <Link onClick={props.closeDrawer} to="/settings">
            <li className="list-group-item list-group-item-action">Ayarlar</li>
          </Link>

          <Link onClick={props.closeDrawer} to="/about">
            <li className="list-group-item list-group-item-action">Hakkında</li>
          </Link>

          <Link onClick={props.closeDrawer} to="/contact">
            <li className="list-group-item list-group-item-action">İletişim</li>
          </Link>
        </ul>
      </div>
    </MaterialTitlePanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
