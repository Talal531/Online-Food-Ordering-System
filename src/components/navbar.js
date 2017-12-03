import React from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

// const logoStyle = {
//     width: "50px",
//     height: "30px",
//     paddingTop: "0px"
// }

const navbarStyle = {
    color: "#fff",

}


const NavbarComp = () => {
    return (
        <div>
            <Navbar inverse collapseOnSelect styl={navbarStyle}>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">
                            {/* <span>
                            <img
                                style={logoStyle}
                                src="http://diylogodesigns.com/blog/wp-content/uploads/2016/03/my-pub-food-logo-design.png"
                                alt=""/></span> */}
                            foodMasty</a>
                    </Navbar.Brand>

                    <Navbar.Toggle/>

                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight>
                        <NavItem href="#">Login</NavItem>
                        {/* <NavItem href="#">Link Right</NavItem> */}
                    </Nav>

                </Navbar.Collapse>

            </Navbar>

        </div>

    );
}

export default NavbarComp;