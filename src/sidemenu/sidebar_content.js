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
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    height: '100%',
    backgroundColor: 'white'
  },
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  }
}

const sideMenuMainItems = [
  { title: 'Ana Sayfa', path: '/' },
  { title: 'Raporlar', path: '/reports' }
]

const sideMenuItems = [
  { title: 'Ayarlar', path: '/settings' },
  { title: 'Hakkında', path: '/about' },
  { title: 'İletişim', path: '/contact' }
]

const renderMenuItem = ({ onPressMenuItem, title, path }) => {
  return (
    <Link className="sidemenuItem" key={title} onClick={() => onPressMenuItem(title)} to={path}>
      <li>{title}</li>
    </Link>
  )
}

const SidebarContent = ({ style, onPressMenuItem }) => {
  const panelStyle = style ? { ...styles.sidebar, ...style } : styles.sidebar

  const header = (
    <span>
      <span>Cihaz Takip</span>
    </span>
  )

  return (
    <MaterialTitlePanel title={header} style={panelStyle}>
      <div style={styles.content}>
        <ul className="list-group">
          {sideMenuMainItems.map(item => renderMenuItem({ onPressMenuItem, ...item }))}
        </ul>

        <div style={styles.divider} />

        <ul className="list-group">
          {sideMenuItems.map(item => renderMenuItem({ onPressMenuItem, ...item }))}
        </ul>
      </div>
    </MaterialTitlePanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
