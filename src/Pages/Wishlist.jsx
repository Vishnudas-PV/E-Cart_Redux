import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import {deleteFromWishlist} from '../Redux/slices/wishListSlice'


import { Col, Row } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { addToCartList } from '../Redux/slices/cartListSlice';

function Wishlist() {

  const wishlistArray=useSelector((state)=>state.wishlistReducer)

  const handleWishlistToCart=(item)=>{
   dispatch(addToCartList(item))
   dispatch(deleteFromWishlist(item.id))
  }


  const dispatch=useDispatch()

  return (
    <div>
      <div className='text-center'>
      <h2>WishLists</h2>


      </div>
<Row className='m-3'>
  
  {
    wishlistArray.length>0 ? wishlistArray.map((item)=>(
      <Col sm={12} md={6} lg={4} xl={3}> 
     <MDBCard style={{width:'100%',height:'500px',margin:'20px'}}>
      <MDBCardImage style={{width:'100%',height:'300px'}} src={item.thumbnail} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          {item.description.slice(0,40)}...
        </MDBCardText>
     <div className='d-flex justify-content-around mt-3'>
     <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))}  href='' className='bg-danger'><i className='fa-solid fa-trash fa-beat fa-lg text-light m-3'></i></MDBBtn>
     <MDBBtn onClick={()=>handleWishlistToCart(item)} href='' className='bg-light'> <i class="fa-solid fa-cart-shopping fa-lg text-warning m-3"></i></MDBBtn>
     </div>
      </MDBCardBody>
    </MDBCard>

   



      </Col>

    )):
    <div className='text-center'>

     
      <img src="https://www.aesthetic.am/theme_aesthetic/static/src/images/shop/empty.gif" style={{width:'500px'}} alt="" />

      <h1>Your Wishlist Is Empty</h1>
    <a href="/"><button  className='btn'>Back To Home</button></a>  
    </div>
  }
  

</Row>

    </div>
  )
}

export default Wishlist
