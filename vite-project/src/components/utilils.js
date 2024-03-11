import axios from 'axios';
const getCountryName = async (countryCode) => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/${countryCode}`);
        console.log(response.data.name)
        return response.data.name;
    } catch (error) {
        console.error('Error fetching country name:', error);
        return null;
    }
    };

export default getCountryName