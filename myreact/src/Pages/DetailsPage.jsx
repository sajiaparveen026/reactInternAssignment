import React from 'react'
import DetailsLayoutHoc from '../Layouts/Details.Layout'
import SecondPageComponent1 from '../Components/SecondPageComponent1'
import SecondPageComponent2 from '../Components/SecondPageComponent2'
import Footer from '../Components/Footer.Component'

const DetailsPage = () => {
  return  <>
  <div style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'gray'}}>
    <h1 style={{text:'2xl',display:'flex',alignContent:'center',justifyContent:'center',color:'brown'}}>Component-1</h1>
  </div>
   <SecondPageComponent1 />
   <div style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'lightblue'}}>
    <h1 style={{text:'2xl',display:'flex',alignContent:'center',justifyContent:'center',color:'brown'}}>Component-2</h1>
  </div>
  <SecondPageComponent2/>
  <Footer/>
  </>
}

export default DetailsLayoutHoc(DetailsPage)