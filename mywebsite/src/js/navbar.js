/*
* This file contains the component and functionality related to navigating the website
*/

import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import logo from '../logo.svg'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
                <Navbar
                    bg={'dark'}
                    variant={'dark'}
                    sticky={'top'}
                    collapseOnSelect={true}
                >
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{'Kaustubh Lall'}

                    </Navbar.Brand>
                </Navbar>
        );
    }

}

export default NavBar;