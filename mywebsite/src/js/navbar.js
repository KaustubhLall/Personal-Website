/*
* This file contains the component and functionality related to navigating the website
*/

import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    {/*todo replace main with logo*/}
                    <Navbar.Brand href="#home">Main</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="#features">My Projects</Nav.Link>
                            <Nav.Link href="#pricing">Work Experience</Nav.Link>
                            <Nav.Link href="#pricing">Research</Nav.Link>
                            <Nav.Link href="#pricing">Hobbies</Nav.Link>

                            <NavDropdown title="Research" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav>
                            {/*todo add github, linkedin etc here*/}
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavBar;