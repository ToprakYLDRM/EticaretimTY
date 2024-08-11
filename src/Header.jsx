import React, {useState} from "react";
import {
    Collapse,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Navbar,
    Nav,
} from "reactstrap";
import Cart from "./Cart";


export default function Header(props) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle =()=> {
      setIsOpen(!isOpen)
    }
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Eticaretim</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.mediamarkt.com.tr" target="_blank">
                            MediaMarkt
                        </NavLink>
                    </NavItem>
                    <Cart cart={props.cart} removetocart={props.removetocart}/>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
