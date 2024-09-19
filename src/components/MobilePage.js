import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import MobileDescriptionComponent from './MobileDescriptionComponent'
import ProductGridContainer from './ProductGridContainer'
import MobileComponent from './MobileComponent'
const MobilePage = () => {
  const [mobileData,setMobileData]=useState([])
  useEffect(()=>{
    const fetchData=async ()=>{
    const response=await axios.get("http://localhost:3000/mobile/")
    console.log(response.data);
    setMobileData(response.data)
    }
    fetchData()
  },[])
  return (
    <>
    <MobileComponent data={mobileData}/>
    </>
  )
}

export default MobilePage
