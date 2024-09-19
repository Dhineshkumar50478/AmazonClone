import React from 'react'
import '../css/AmazonFeatures.css'
import { TbReplace } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { PiShieldWarning } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { TbBrandAuth0 } from "react-icons/tb";
import { FaTools } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
const AmazonFeatures = () => {
  return (
    <>
     <div className="amazonFeatureBlock">
       <div className="featureLayout">
         <span><TbReplace /></span>
         <p><center>7 days Replacement</center></p>
       </div>
       <div className="featureLayout">
         <span><FaShippingFast /></span>
         <p><center>Free Delivery</center></p>
       </div>
       <div className="featureLayout">
         <span><PiShieldWarning /></span>
         <p><center>1 Year Warranty</center></p>
       </div>
       <div className="featureLayout">
         <span><GiPayMoney /></span>
         <p><center>Pay on Delivery</center></p>
       </div>
       <div className="featureLayout">
         <span><TbBrandAuth0 /></span>
         <p><center>Top Brand</center></p>
       </div>
       <div className="featureLayout">
         <span><FaTools /></span>
         <p><center>Installation available</center></p>
       </div>
       <div className="featureLayout">
         <span><GrDeliver /></span>
         <p><center>Amazon Delivered</center></p>
       </div>
     </div>
    </>
  )
}

export default AmazonFeatures
