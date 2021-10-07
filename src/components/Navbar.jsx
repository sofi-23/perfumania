import React, { useState } from 'react';
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
} from 'reactstrap';

export default function NavBar () {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  
    return (
        <>
       <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">Perfumanía</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
         

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                FRAGANCIAS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Femeninas
                </DropdownItem>
                <DropdownItem>
                  Masculinas
                </DropdownItem>
                <DropdownItem>
                  Unisex
                </DropdownItem>
              </DropdownMenu>         
              </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">MAQUILLAJE</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink href="/components/">GIFT SETS</NavLink>
            </NavItem> 
   
          </Nav>
        </Collapse>
      </Navbar>
        </>
    )
}