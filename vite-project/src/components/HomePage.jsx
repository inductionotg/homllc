import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Topbar from './Topbar';
import './HomePage.css'
import { X } from 'react-feather';
import { MapPin } from 'react-feather';
import { useState,useEffect } from 'react';
import { useConversion } from './mobile-context';
const imageUrl = 'https://s3-alpha-sig.figma.com/img/fac3/d34c/9de36001a0149bb1cb5ca78b1687489f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJXRVKTgl32x4wCl~rQx8et-LBW8j-bzrgHnbOGvk5nA38ovybQnynamNLmyg8lFlECevNWBZlZW5rAvFw8smGg2O1wxWcXxrnka2A6QUhQg9IAaZX63brvIoiDv-r5S-T29jUOxG4tyD5N~CD8unYkhlrcJ5KVXBebnDi8~Nnxw9uniEo6rQJNU5NUFf0~W2cyidfB1PALLsof1yNbZrsxnvnSEgEAZJw~RQSZfHbuqIWSHqQ1TFUaXm-Hll3tavR02gMPSrZHHfsWefFbIUXtcnB9RWWoRbuUpYdogsiMbhS2bMBVBvl9r5LUb6V536JxWJRsMGQRX3YUusuEPJA__'
function HomePage() {
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const {weatherData} = useConversion()
    console.log(weatherData,"hm")

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setBackgroundLoaded(true);
    };

    
    image.onerror = () => {
      console.error('Error loading background image');
    };

   
    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imageUrl]);
    return (
      <div className='mobileContainer-1'  style={{backgroundImage: backgroundLoaded ? `url(${imageUrl})` : 'none'}}>
        
        <div className="header">
            <Topbar color="white"/>
      </div>
      <div className='main-wrapper-home'>
        <div className="search-section-home">
            <div>
                <span><X size={32} color="white" /></span>
            </div>
            <div>
                <span><button className='btn-live'>LIVE</button></span>
            </div>

        </div>
        <div className='map-indicator'>
            <div className='map-indicator-marker'>
                <span><MapPin color='#FFFFFF' size={18}/></span>
                <span className='map-indicator-current'>CURRENT LOCATION</span>
            </div>
        </div>
        <div className='city-indicator'>
            <p>{weatherData?.city.name},</p>
            <p>United States</p>
        </div>
        
      </div>
        
      </div>
    );
  }

  export default HomePage