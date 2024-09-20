import React, { useContext, useCallback } from 'react';
import '../css/MobileComponent.css';
import LightningDeal from './LightningDeal';
import DiscountComponent from './DiscountComponent';
// import OfferComponent from './OfferComponent';
import { MobileDescriptionContext } from '../context/MobileDescription';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContextContainer';

const MobileComponent = ({ data }) => {
  const {cart,handleCart} = useContext(CartContext)
  const { handleShowMobileData } = useContext(MobileDescriptionContext);
  const navigate = useNavigate();

  const handleShowMobile = useCallback(
    (item) => {
      handleShowMobileData(item);
      navigate('/showmobile');
    },
    [handleShowMobileData, navigate]
  );
   console.log(cart);
   
  
  return (
    <>
      {data.map((item, index) => (
        <div className="mobileContainer" key={index}>
          <div className="mobileImageContainer" onClick={() => handleShowMobile(item)}>
            <img src={item.mobileImgUrl[0].ImgUrl} alt={item.description} />
          </div>
          <div className="mobileDetailsContainer">
            <h3>{item.description}</h3>
            <p>{item.buyercount}</p>
            {item.price >= 15000 && <LightningDeal />}
            <DiscountComponent />
            <p>
              <strong>₹{item.price}</strong> M.R.P: <span>₹{item.baseprice}</span> ({item.discount}% off)
            </p>
            <p>Save extra with No Cost EMI</p>
            <p>{item.deliverytype} <span>Sun, 15 Sept</span></p>
            <p>Service: {item.service}</p>
            <button className='addtoCart-btn' onClick={()=>handleCart(item.description,item.price)}>Add to cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MobileComponent;
