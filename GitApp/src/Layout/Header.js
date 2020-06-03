import React , { useContext , useState } from 'react';

import {
    Collapse , Navbar , NavbarToggler , NavbarBrand , Nav , NavItem , NavLink , NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {

    const context =  useContext(UserContext);

    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);


    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand >
                <Link to="/" className="text-white ">Github Repository App</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
            {
                context.user?.email ? context.user.email : ""
            }
            </NavbarText>
            <NavbarToggler onClick={toggle} >

            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {context.setuser(null)}} className="text-white"> Logout </NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/SignUp" className="text-white"> SignUp </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/SignIn" className="text-white"> SignIn </NavLink> 
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>

        </Navbar>
    )
}

export default Header;
