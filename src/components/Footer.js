import React from 'react'
import '../css/Footer.css'
import { BsGlobe2 } from "react-icons/bs";
import { RiExpandUpDownFill } from "react-icons/ri";



const Footer = () => {
  return (
    <div>
        
<footer>
  <div id="footer-block1">
    <div id="ontop"><center><a href='#topHeaderId'>Back to top</a></center></div>
  </div>

  <div id="footer-block2">
    <div id="known">
      <div id="text-title">Get to Know Us</div>
      <div id="text-body">About Us</div>
      <div id="text-body">Careers</div>
      <div id="text-body"> Press Releases</div>
      <div id="text-body">Amazon Science</div>
    </div>

    <div id="known">
      <div id="text-title">Connect with Us</div>
      <div id="text-body">Facebook</div>
      <div id="text-body">Twitter</div>
      <div id="text-body">Instagram</div>
    </div>

    <div id="known">
      <div id="text-title">Make Money with Us</div>
      <div id="text-body">Sell on Amazon</div>
      <div id="text-body">Sell under Amazon Accelerator</div>
      <div id="text-body">Protect and Build Your Brand</div>
      <div id="text-body">Amazon Global Selling</div>
      <div id="text-body"> Become an Affiliate</div>
      <div id="text-body">Fulfilment by Amazon</div>
      <div id="text-body"> Advertise Your Products</div>
      <div id="text-body">  Amazon Pay on Merchants</div>
    </div>

    <div id="known">
      <div id="text-title">Let Us Help You</div>
      <div id="text-body"> COVID-19 and Amazon</div>
      <div id="text-body"> Your Account</div>
      <div id="text-body"> Returns Centre</div>
      <div id="text-body">100% Purchase Protection</div>
      <div id="text-body"> Amazon App Download</div>
      <div id="text-body"> Help</div>
    </div>
  </div>

  <div id='horizon-line'></div>

  <div id="footer-block3">
    <div id="logo-block">
      <div id="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8L1HIH2ZlhTcSR2x5c993GIA6DFFs06YEg&s" alt="amazonLogo" width={70} height={30}/>
      </div>
      <div id="lan-block">
        <div id="text"><BsGlobe2 id='globe-icon'/>English<RiExpandUpDownFill id='up-down-arrow'/></div>
        <div id='text'>
            <img src="https://media.istockphoto.com/vectors/vector-flag-of-the-republic-of-india-proportion-23-the-national-flag-vector-id1051236720?k=20&m=1051236720&s=612x612&w=0&h=ATObRTHmTosADa9zaB2dQPn_VAQmG1XYH2x92kzc304="
             alt="" width={15} height={10}/>India</div>
      </div>
     </div>
     <div id="country-block">
      <div id="country-block1"><div id="country-name">Australia</div>
      <div id="country-name">Brazil</div>
      <div id="country-name">Cannada</div>
      <div id="country-name">china</div>
      <div id="country-name">France</div>
      <div id="country-name">Germany</div>
      <div id="country-name">Italy</div>
      <div id="country-name">Japan</div>
      <div id="country-name">Mexica</div>
      <div id="country-name">Australia</div>
      <div id="country-name">Netherlands</div>
      <div id="country-name">Poland</div>
      <div id="country-name">Singapore</div>
      <div id="country-name">Spain</div>
      <div id="country-name"> Turkey</div>
      <div id="country-name"> United Arab Emirates</div>
    </div>
    <div id="country-block2">
     <div id="country-name"> United Kingdom</div>
     <div id="country-name"> United States</div>
    </div> 
   </div>
  </div>

  <div id="footer-block4">
    <div id="footer-block4-top">
      <div id="footer-block4-top1">
        <div id="content1">
          <p id="content1-head" >Abebooks</p>
          <p>Books,art</p>
          <p>&collectibles</p>
        </div>

        <div id="content1">
          <p id="content1-head">	Amazon Web Services</p>
          <p>Scalable Cloud</p>
          <p>Computing Services</p>
        </div>

        <div id="content1">
          <p id="content1-head">	Audible </p>
          <p> Download</p>
          <p>Audio Books</p>
        </div>

        <div id="content1">
          <p id="content1-head">	IMDb</p>
          <p>Movies, TV</p>
          <p> & Celebrities</p>
        </div>
      </div>
      <div id="footer-block4-top2">
        <div id="content1">
          <p id="content1-head">Shopbop</p>
          <p>Designer</p>
          <p>Fashion Brands</p>
        </div>

        <div id="content1">
          <p id="content1-head">Amazon Business</p>
          <p>Everything For</p>
          <p>Your Business</p>
        </div>

        <div id="content1">
          <p id="content1-head">Prime Now</p>
          <p>2-Hour Delivery</p>
          <p> on Everyday Items</p>
        </div>

        <div id="content1">
          <p id="content1-head">Amazon Prime Music</p>
          <p>100 million songs, ad-free</p>
          <p>Over 15 million podcast episodes</p>
        </div>

      </div>
    </div>
    <div id="footer-block4-bottom">
      <div id="copyrights-block">
        <div id="copyrights-block1">
          <div><a href="#" id="hidden-link">Conditions of Use & Sale</a></div>
          <div><a href="#" id="hidden-link">Privacy Notice</a></div>
          <div><a href="#" id="hidden-link">Interest-Based Ads</a></div>
        </div>
        <div id="copyrights-block2">
          <p>©1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer