import React, { useContext } from 'react';
import '../css/MobileSpecificationComponent.css';
import { MobileDescriptionContext } from '../context/MobileDescription';

const MobileSpecificationComponent = ({ specification }) => {
  const { mobilespec,handleMobileSpec } = useContext(MobileDescriptionContext);
  return (
    <>
      <div className="MobileSpecificationContainer">
        <div className="MobileSpecificationBlock">
          <ul>
            <li>Brand</li>
            <li>Operating System</li>
            <li>CPU Model</li>
            <li>Screen Size</li>
            <li>Memory Storage Capacity</li>
          </ul>
        </div>
        <div className="MobileSpecification">
          <ul>
            <li>{specification.brand}</li>
            <li>{specification.os}</li>
            <li>{specification.processor}</li>
            <li>{specification.screensize}</li>
            <li>{`${mobilespec.storageSpec.ROM} GB`}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileSpecificationComponent;
