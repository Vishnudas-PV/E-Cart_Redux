import { MDBBadge } from 'mdb-react-ui-kit';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';


function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer) //array of wishlist                  //component to action dispatching using the hook useSelector 
  const cartList=useSelector((state)=>state.cartlistReducer)
  console.log(cartList);
           
  return (    
    <div style={{position:'sticky',top:0,zIndex:100}}>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">E-CART</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
          </Nav>
          <Nav>
      <Link to={'/wishlist'}>
      <Nav.Link href="#deets">
            <i class="fa-solid fa-heart fa-beat fa-lg text-danger m-3"></i>
            <MDBBadge color='danger' light pill className='text-danger position-absolute translate-middle'>
         {wishlist.length}
          {/* <span class="visually-hidden">unread messages</span> */}
        </MDBBadge>
                </Nav.Link>
      </Link>


       <Link to={'/cart'}>
            <Nav.Link eventKey={2} href="#memes">
            <i class="fa-solid fa-cart-shopping fa-lg text-warning m-3"></i>
            <MDBBadge color='danger' light pill className='text-danger position-absolute translate-middle'>
            {cartList.length}
          {/* <span class="visually-hidden">unread messages</span> */}
        </MDBBadge>
            </Nav.Link>
       
       </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header