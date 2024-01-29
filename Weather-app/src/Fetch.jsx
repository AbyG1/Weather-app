import React, { useState } from 'react'
import axios from 'axios'
import { MDBInput } from 'mdb-react-ui-kit';


function Fetch() {

    const API_KEY = 'd0e0779428604824556c49dede412c3b';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    

    const fetchWeatherByCity = async (cityName) => {
        try {
            const response = await axios.get(`${BASE_URL}weather?q=${cityName}&appid=${API_KEY}`);
            setWeatherData(response.data); // Update weatherData state
            setError(null);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setWeatherData(null); // Reset weatherData state
            setError('Error fetching weather data. Please try again.');
        }
    };
    

      const handleInputChange = (e) => {
        setCityName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchWeatherByCity(cityName); 
    };





  return (
        <>
                <div className="container my-3 py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className='text-center p-2'>
                                    <label htmlFor="formControlLg" className='display-5'>Enter the city Name</label>
                                    <MDBInput  id='formControlLg' type='text' size='lg' onChange={handleInputChange}/>
                                    <button type="submit" className="btn btn-primary m-3">Fetch Weather</button>
                                </div>
                            </form>
                            {weatherData && (
                            <div>
                                <h2>{weatherData.name}</h2>
                                <p>Temperature: {(weatherData.main.temp - 273)} °C</p>
                                <p>Description: {weatherData.weather[0].description}</p>
                            </div>
                        )}
                        
                        </div>
                    </div>
                </div>
        
        </>
  )
}

export default Fetch