import React, { useContext } from "react";
import "../css/MobileCollection.css";
import StorageComponent from "./StorageComponent";
import { MobileDescriptionContext } from "../context/MobileDescription";

const MobileCollection = ({ storage, imgUrl }) => {
  const { handleMobileSpec, mobilespec } = useContext(MobileDescriptionContext);

  const handleColorChange = (color, imageUrl, storageSpec) => {
    handleMobileSpec(color, imageUrl, storageSpec);
  };

  return (
    <div className="MobileCollectionContainer">
      <p>Color: <strong>{mobilespec.color}</strong></p>
      <div className="slideLayoutBlock">
        {imgUrl.map((imgData, index) => (
          <div key={index} className="slideLayout" onClick={() => handleColorChange(mobilespec.color, imgData, mobilespec.storageSpec,mobilespec.showImgpara)}>
            <img src={imgData.ImgUrl} alt={`Color ${index}`} />
          </div>
        ))}
      </div>
      <p>Size: <strong>{mobilespec.storageSpec.RAM}GB + {mobilespec.storageSpec.ROM}GB</strong></p>
      <StorageComponent storageData={storage} />
    </div>
  );
};

export default MobileCollection;
