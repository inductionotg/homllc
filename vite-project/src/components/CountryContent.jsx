import './CountryContent.css'; 
import axios from 'axios';
import getCountryName from './utilils';
import {Cloud} from 'react-feather'
const imageUrl = 'https://s3-alpha-sig.figma.com/img/fac3/d34c/9de36001a0149bb1cb5ca78b1687489f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJXRVKTgl32x4wCl~rQx8et-LBW8j-bzrgHnbOGvk5nA38ovybQnynamNLmyg8lFlECevNWBZlZW5rAvFw8smGg2O1wxWcXxrnka2A6QUhQg9IAaZX63brvIoiDv-r5S-T29jUOxG4tyD5N~CD8unYkhlrcJ5KVXBebnDi8~Nnxw9uniEo6rQJNU5NUFf0~W2cyidfB1PALLsof1yNbZrsxnvnSEgEAZJw~RQSZfHbuqIWSHqQ1TFUaXm-Hll3tavR02gMPSrZHHfsWefFbIUXtcnB9RWWoRbuUpYdogsiMbhS2bMBVBvl9r5LUb6V536JxWJRsMGQRX3YUusuEPJA__'
function CountryContent(){  
    return (
        <>
        <div className="country-details">
            <h1>New York,<br/> United States</h1>
            <p>Oct 04, 2019</p>
            <span className='icon-cloud'><Cloud color="blue"/>Cloudy</span>
        </div>
        <div className="country-image">
            <button className='btn-on-image'>LIVE</button>
            <img src={imageUrl} className=" rounded-image"/>
        </div>

        </>
    )
}
export default CountryContent