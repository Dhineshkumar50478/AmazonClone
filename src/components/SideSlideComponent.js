import React, { useContext } from "react";
import "../css/sideSlideComponent.css";
import { MobileDescriptionContext } from "../context/MobileDescription";

const SideSlideComponent = () => {
  const { mobilespec,handleMobileSpec } = useContext(MobileDescriptionContext);
  console.log(mobilespec.mobileImgUrl);

  return (
    <div className="sideSlideBlock">
      {mobilespec.mobileImgUrl &&
        Object.values(mobilespec.mobileImgUrl).map((url, index) => (
          <div key={index} className="slideLayout" onClick={() => handleMobileSpec(mobilespec.color,mobilespec.mobileImgUrl, mobilespec.storageSpec,url)}>
            <img src={url} alt={`Slide ${index}`} />
          </div>
        ))}
    </div>
  );
};

export default SideSlideComponent;
