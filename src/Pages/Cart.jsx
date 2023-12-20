import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { deleteFromCartlist, emptyCart } from '../Redux/slices/cartListSlice';





function Cart() {

  const cart = useSelector((state) => state.cartlistReducer)//array of cart items
  console.log(cart);

  const [total, setTotal] = useState(0)

  const navigate=useNavigate();
  const dispatch = useDispatch()


  const getCartTotal = () => {
    if (cart.length > 0) {
      setTotal(cart.map(item => item.price).reduce((p1, p2)=>p1+p2))

    }

    else {
      setTotal(0)
    }

  }


  const handleCheckOut=()=>{  
    dispatch(emptyCart())
    alert('Order Placed Successfully')
    navigate('/')
  }

  
  console.log(total);

  useEffect(() => {
    getCartTotal()
  }, [cart])

  return (
    <div>
      <Row className='g-0'>
        <Col className='m-3'>
          {
            cart.length > 0 ?
              <MDBTable hover>
                <MDBTableHead>
                  <tr>
                    <th scope='col'>No</th>
                    <th scope='col'>Product Name</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} alt="" style={{ width: '180px', height: '160px' }} /></td>
                      <td>{item.price} $</td>
                      <td><button onClick={() => dispatch(deleteFromCartlist(item.id))} className='btn btn-light'><i className="fa-solid fa-trash text-danger"></i></button></td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
              :
              <div className='text-center'>
                <img style={{ height: '26rem' }} src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" />
                <h1 className='m-2'>Your Wishlist is Empty</h1>
                <Link to={'/'}>
                  <button className='btn btn-primary m-4'>Back to Home</button>
                </Link>
              </div>
          }
        </Col>




        <Col>
          <div className='border m-5 p-3'>
            <h1 className='text-center m-2 text-success'>Cart Summary</h1>
            <h3 className='m-2'>Total Number of Products: {cart.length}</h3>
            <h2 className='m-2'>Total: {total}</h2>
            <div className='text-center'>
              <button onClick={()=>handleCheckOut()} className='btn btn-success'> Check Out</button>

            </div>
          </div>

        </Col>



      </Row>



    </div>
  )
}

export default Cart