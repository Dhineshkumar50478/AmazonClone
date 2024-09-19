import React from "react";
import "../css/OfferComponent.css";
import { BiSolidOffer } from "react-icons/bi";

const OfferComponent = ({ offers }) => {
  return (
    <>
      <div className="OfferBlock">
        <div className="offerHeader">
          <span>
            <BiSolidOffer />
          </span>
          <p>Offers</p>
        </div>
        <div className="offerCategoryBlock">
          {offers.map((offer, index) => (
            <div className="OfferContainer" key={index}>
              <span>{offer.offerType}</span>
              <div>
                <p>{offer.OfferDescription}</p>
                <span>Offer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferComponent;
