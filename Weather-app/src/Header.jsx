import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
   <>
     <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png'
              height='30'
              alt=''
              loading='lazy'
            />
           Weather App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
   
   </>
  )
}

export default Header