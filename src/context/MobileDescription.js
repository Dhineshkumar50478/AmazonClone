import React, { createContext, useState } from 'react';

// Create the context
export const MobileDescriptionContext = createContext();

const MobileDescription = ({ children }) => {
  const [showMobileData,setShowMobile]=useState({})
  const [mobilespec, setMobileSpec] = useState({
    color: "", 
    mobileImgUrl: {}, 
    storageSpec: {},
    showImgpara:""
  });

 const handleShowMobileData=(data)=>{
  setShowMobile(data)
 }



  // Function to update the mobile specs
  const handleMobileSpec = (colorpara, mobileImgUrlpara, storagepara,showImgpara) => {
    setMobileSpec({
      ...mobilespec, // Spread the existing properties
      color: colorpara, // Assign the updated value for color
      mobileImgUrl: mobileImgUrlpara, // Assign the updated value for mobileImgUrl
      storageSpec: storagepara, // Assign the updated value for storageSpec
      showImgpara:showImgpara
    });
  };

  return (
    <MobileDescriptionContext.Provider value={{ handleMobileSpec, mobilespec,handleShowMobileData,showMobileData }}>
      {children}
    </MobileDescriptionContext.Provider>
  );
};

export default MobileDescription;
