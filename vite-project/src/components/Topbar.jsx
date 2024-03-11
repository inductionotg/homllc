import './Topbar.css';
import {Wifi} from 'react-feather'
import {Battery} from 'react-feather'
import {BatteryCharging} from 'react-feather'
const Topbar = ({color}) => {
    return (
      <>
        <div className="headerLeft">
            <span className="icon" style={{color:color}}>9:41</span>
        </div>
        <div className="headerRight">
          <span className="icon"><Wifi color={color}/></span>
          <span className="icon"><Battery color={color}/></span>
          <span className="icon"><BatteryCharging color={color}/></span>
        </div>
      </>
    );
  };
  export default Topbar