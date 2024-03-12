import React, { useEffect, useState } from 'react';
import './DesktopModeMessage.css'
const DesktopModeMessage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth > 768); 
    };

    
    checkScreenWidth();

   
    window.addEventListener('resize', checkScreenWidth);

    
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      {isDesktop && (
        <div style={{ padding: '10px', background: '#f0f0f0', textAlign: 'center' }}>
          <p className='desktop-exp'>
            For a better experience, switch to mobile mode on your device.
          </p>
        </div>
      )}

      
    </div>
  );
};

export default DesktopModeMessage;
