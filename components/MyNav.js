import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from 'reactstrap'

function MyNav(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div style={{ backgroundColor: '#1a3d3c', color: '#9ed6d5' }}>
      <Navbar {...args}>
        <NavbarBrand href='/' style={{ color: '#9ed6d5' }}>
          <Button
            style={{
              color: '#1a3d3c',
              fontSize: '24px',
              backgroundColor: '#3f7675',
            }}
          >
            SNOW RAG
          </Button>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            style={{ backgroundColor: '#1a3d3c' }}
            className='me-auto text-center'
            navbar
          >
            <NavItem>
              <NavLink style={{ color: '#9ed6d5' }} href='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: '#9ed6d5' }} href='/snow_rag'>
                Chatbot
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MyNav
