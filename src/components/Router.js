import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./Landing";
import Signin from "./Signin";
import Signup from "./Signup";
import MobilePage from "./MobilePage";
import MobileDescription from "../context/MobileDescription";
import MobileDescriptionComponent from "./MobileDescriptionComponent";
const Router = () => {
  return (
    <>
    <MobileDescription>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element={<Landing/>}/>
           <Route path="/signin" element={<Signin/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/mobile" element={<MobilePage/>}/>
           <Route path="/showmobile" element={<MobileDescriptionComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </MobileDescription>
    </>
  );
};

export default Router;
