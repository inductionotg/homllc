import { useContext } from 'react';
import { useConversion } from './mobile-context';
import './cloud.css'; 

function Cloud(){
     
      return (
        <div className='forcast'>
            {weatherInfoArray?.map((item)=>{
                console.log("item",item)
                return (
                    <div className='cloud-details'>
                        <p className='time'> {item.dt}</p>
                        <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}/> 
                        <p className='temp'>{Math.round(300-item.main.temp)}</p>
                    </div>
                )
            })}
        </div>
        
      )
}
export default Cloud