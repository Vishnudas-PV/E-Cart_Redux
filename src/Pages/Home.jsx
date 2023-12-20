import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/slices/wishListSlice';
import { addToCartList } from '../Redux/slices/cartListSlice';






function Home() {
 
  const dispatch = useDispatch()
  // const [productData,setProductData]=useState([])

  const data=useFetch('https://dummyjson.com/products')
  console.log(data);





  return (
    <div>
<Row className='m-3'>
{

  data.length>0?data.map((item)=>(
    <Col sm={12} md={6} lg={4} xl={3}>
<MDBCard style={{width:'100%',height:'500px',margin:'20px'}}>
      <MDBCardImage style={{width:'100%',height:'300px'}} src={item.thumbnail} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          {item.description.slice(0,40)}...
        </MDBCardText>
     <div className='d-flex justify-content-around mt-3'>
     <MDBBtn href='' onClick={()=>dispatch(addToWishList(item))} className='bg-light'><i className='fa-solid fa-heart fa-beat fa-lg text-danger m-3'></i></MDBBtn>
     <MDBBtn href='' onClick={()=>dispatch(addToCartList(item))} className='bg-light'> <i class="fa-solid fa-cart-shopping fa-lg text-warning m-3"></i></MDBBtn>
     </div>
      </MDBCardBody>
    </MDBCard>

</Col>
  )):"No Products Found"
}

</Row>


    </div>
  )
}

export default Home