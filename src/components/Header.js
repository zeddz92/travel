import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import * as routes from '../utils/routes';
export default function Header() {
    return (
        <div className="header">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href={"/"}>Travelience</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="Company" id="basic-nav">
                            <MenuItem href={routes.ABOUT} eventKey={1.1}>About</MenuItem>
                            <MenuItem href={routes.STAFF} eventKey={1.2}>Staff</MenuItem>
                            <MenuItem href={routes.JOBS} eventKey={1.3}>Jobs</MenuItem>
                            <MenuItem href={routes.CONTACT} eventKey={1.4}>Contact</MenuItem>
                        </NavDropdown>

                        <NavItem eventKey={2} href={routes.JOBS}>
                            Jobs
                        </NavItem>

                        <NavItem eventKey={3} href={routes.SERVICES}>
                            Services
                        </NavItem>

                        <NavItem eventKey={4} href={routes.PRESS}>
                            Press
                        </NavItem>

                        <NavItem eventKey={5} href={routes.CONTACT}>
                            Contact
                        </NavItem>

                        <NavDropdown eventKey={6} title="日本語" id="basic-nav">
                            <MenuItem eventKey={6.1}>English</MenuItem>
                            <MenuItem eventKey={6.2}>Spanish</MenuItem>

                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};