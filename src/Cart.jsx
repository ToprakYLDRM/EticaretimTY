import React from 'react';
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";

export default function Cart(props) {
  return (
    <>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Card - {props.cart.length}
      </DropdownToggle>
      <DropdownMenu end>
        {props.cart.map((cartItem)=>(
          <DropdownItem key={cartItem.product.id}>
            <span className="badge basge-danger" style={{marginLeft:"10px",backgroundColor:"red"}}
            onClick={() => props.removetocart(cartItem.product)}>
              X
            </span>
            {cartItem.product.productName}-{cartItem.quantity}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
    
    </>
  )
}
