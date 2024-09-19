import React, { useContext } from "react";
import "../css/StorageComponent.css";
import { MobileDescriptionContext } from "../context/MobileDescription";
const StorageComponent = ({ storageData }) => {
  const { mobilespec,handleMobileSpec} = useContext(MobileDescriptionContext);
  return (
    <>
      <div className="StorageContainer">
        {storageData.map((s) => (
          <div className="StorageBlock" key={s.id} onClick={() => handleMobileSpec(mobilespec.color,mobilespec.mobileImgUrl,s,mobilespec.showImgpara)}>
            <span>{s.RAM} GB RAM + {s.ROM} GB Storage</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default StorageComponent;
