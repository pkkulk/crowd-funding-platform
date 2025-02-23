import { useState } from 'react'
import { Routes,Route } from 'react-router-dom';
import React from 'react';

import { ToastContainer } from "react-toastify";
import Footer from "./Components/footer";
import About from "./Routes/aboutUs"
import Contact from "./Routes/contactUs"
import LandingPage from './Routes/landingPage';
import OnGoingCampaigns from './Components/onGoingCampaigns';
import AllCampaigns from './Routes/allCampaigns';

function App() {
  return (
    <>
       <React.Fragment>
      <div>
        <div >
          <ToastContainer />
          <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route path='/about' exact element={<About/>}/>
            <Route path='/contact' exact element={<Contact/>}/>

            <Route path='/all-campaigns' exact element={<AllCampaigns/>}/>
            <Route path='/ongoing' exact element={<OnGoingCampaigns/>}/>
          </Routes>

        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
    </>
  )
}

export default App
