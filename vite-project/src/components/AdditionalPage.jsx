import { useConversion } from "./mobile-context"

function AdditionalPage(){
   
    return (
        <>
            <h3>Additional Info</h3>
            <div className='info-content'>
              <div className='pre'>
                <p> Precipitatior </p>
                <h6>3%</h6>
              </div>
              <div className='pre'>
                <p>Humidity </p>
                <h6>74%</h6>
              </div>
              <div className='pre'>
                <p>Windy </p>
                <h6>18 km/h</h6>
              </div>
            </div>
        </>
    )
}
export default AdditionalPage