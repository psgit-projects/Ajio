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



function Home() {
  const [apidata,setdata]=useState([])
  useEffect(()=>{
    getData()
  },[])
  async function getData()
  {
    var result = await fetch("https://fakestoreapi.com/products")
    //console.log(result)
    var data = await result.json()
    setdata(data)
  }

  console.log(apidata)
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
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle>{item.price*30} Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category} Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.rating.rate} Rs</MDBCardTitle>
            <MDBCardText>
              {item.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      )
      }
      
      
      
    </MDBRow>
    </div>
  )
}
export default Home
