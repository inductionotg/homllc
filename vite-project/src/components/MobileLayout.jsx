import React from 'react';
import './MobileLayout.css'; // Import your CSS file
import Topbar from './Topbar';
import { useState,useEffect } from 'react';
import CountryContent from './CountryContent'
import axios from 'axios'
import Cloud from './Cloud';
import { Menu,Search } from 'react-feather';
import { useConversion } from './mobile-context';
import AdditionalPage from './AdditionalPage';
import AreaChart from './AreaChart';
const MobileLayout = () => {
  const {loading,weatherData, weatherInfoArray }= useConversion()
  const result = weatherInfoArray?.map((item)=>{
      return Math.round(300-item?.main?.temp)
  })
  const result2 = weatherInfoArray?.map((item)=>{
    return Math.round(300-item?.main?.temp+5)
})
  
  return (
    <div className="mobileContainer">
      <div className="header">
        <Topbar/>
      </div>
      <div className='main-wrapper'>
        <div className="search-section">
          <span><Menu/></span>
          <span><Search/></span>
        </div>

        <div className="wheather-details-section">
        {loading ? (
            <p>Loading...</p>
          ) : (
            <CountryContent weather={weatherData} />
          )}
        </div>
        
        <div className='cloud-section'>
        {loading ? (
            <p>Loading...</p>
          ) : (
            <Cloud/>
          )}
        
        </div>

        <hr />

        <div className='additional-info-section'>
            <AdditionalPage />
        </div>
        <hr />
      </div>

      <div className="footer">
        <div className='footer-temp'>
          <p>Temperature</p>
          <select>
            <option
              value="0-18"
            >
              Last Month
            </option>
          </select>
        </div>
        <div className='temp-graph'>
            <AreaChart/>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
