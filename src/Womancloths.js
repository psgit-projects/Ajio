import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
function WomanCloths() {
    const [apidata,setdata]=useState([])
  useEffect(()=>{
    getData()
  },[])
  async function getData()
  {
    var result = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    
    var data = await result.json()
    setdata(data)
  }
  return (
    <div>
    <br></br>
    <br></br>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    {
        apidata.map((item)=>
        <MDBCol>
      <MDBCard>
        <center>
        <MDBCardImage
          src={item.image} style={{width:"100px", height:"150px"}}
          alt='...'
          position='top'/></center>
        
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardTitle style={{color:"brown"}}>{item.price*5}Rs</MDBCardTitle>
          <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
          <MDBCardTitle style={{color:"blue"}}>{item.rating.rate}</MDBCardTitle>
          <MDBCardText>
            {item.description}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>)
    }
    
    
    
    
  </MDBRow>
    </div>
  )
}

export default WomanCloths