import React, { useContext, useEffect, useState } from "react";
import SideSlideComponent from "./SideSlideComponent";
import LightningDeal from "./LightningDeal";
import OfferComponent from "./OfferComponent";
import AmazonFeatures from "./AmazonFeatures";
import MobileCollection from "./MobileCollection";
import MobileSpecificationComponent from "./MobileSpecificationComponent";
import DiscountComponent from "./DiscountComponent";
import "../css/MobileDescription.css";
import { MobileDescriptionContext } from "../context/MobileDescription";

const MobileDescriptionComponent = () => {
  const [data, setData] = useState(null);
  const { handleMobileSpec, mobilespec, showMobileData } = useContext(MobileDescriptionContext);

  useEffect(() => {
    if (showMobileData) {
      setData(showMobileData);
      // Ensure that showMobileData has the expected structure before calling handleMobileSpec
      if (showMobileData.specification && showMobileData.mobileImgUrl) {
        handleMobileSpec(
          showMobileData.specification.color[0],
          showMobileData.mobileImgUrl[0],
          showMobileData.specification.storage[0],
          showMobileData.mobileImgUrl[0].ImgUrl
        );
      }
    }
  }, [showMobileData]);

  if (!data) return null; // Or some loading indicator

  return (
    <div key={data._id} className="MobileDescriptionContainer">
      <div className="mobileSlideBlock">
        <SideSlideComponent />
      </div>
      <div className="mobileShowBlock">
        <img src={mobilespec.showImgpara} alt="MobileIMG" />
      </div>
      <div className="mobileDescriptionBlock">
        <p className="mobileName">{data.description}</p>
        <p className="mobileSaled">{data.buyercount}</p>
        <hr />
        <LightningDeal />
        <p>
          <span id="discountTag">-{data.discount}%</span>
          <span className="mobilePrice"> ₹{data.price}</span>
        </p>
        <p className="mobileSaled">
          M.R.P.: <span id="priceTag">₹{data.baseprice}</span>
        </p>
        <p>Inclusive of all taxes</p>
        <DiscountComponent />
        <hr />
        <OfferComponent offers={data.offers} />
        <hr />
        <AmazonFeatures />
        <hr />
        <MobileCollection
          color={data.specification.color}
          storage={data.specification.storage}
          imgUrl={data.mobileImgUrl}
        />
        <MobileSpecificationComponent
          specification={data.specification}
        />
      </div>
    </div>
  );
};

export default MobileDescriptionComponent;
