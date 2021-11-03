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
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

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
                <Link to="/categoria/femeninas">
                <DropdownItem>
                  Femeninas
                </DropdownItem>
                </Link>
                <Link to="/categoria/masculinas">
                <DropdownItem>
                  Masculinas
                </DropdownItem>
                </Link>
                <Link to="/categoria/unisex">
                <DropdownItem>
                  Unisex
                </DropdownItem>
                </Link>
              </DropdownMenu>         
              </UncontrolledDropdown>
              
            <NavItem>
              <NavLink href="/categoria/giftSet">GIFT SETS</NavLink>
            </NavItem> 
            
   
          </Nav>
        </Collapse>
          <Link to="/cart">
            <CartWidget/>
          </Link>
      </Navbar>
        </>
    )
}