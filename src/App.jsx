import { useState } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
import 'bootstrap/dist/css/bootstrap.min.css';
const API_SERVER_AD = import.meta.env.VITE_API_URL;
import Weather from './weather';
import MovieList from './movies'
import Header from './header';
import FormComponent from './form';
import LocationCard from './location';
import MapImage from './mapImage'


export default function App() {
  const [location, setLocation] = useState({
    display_name: " ",
    latitude: "",
    longitude: ""
  })
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState();
  const [movies, setMovies] = useState();

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`

    // try {
    const response = await axios.get(API);
    console.log(response.data);
    const { display_name, lat, lon } = response.data[0];
    console.log(display_name, lat, lon);
    setLocation({ display_name: display_name, latitude: lat, longitude: lon });
    handleSubmit(lat, lon);
    showMovies(display_name)
    // } catch (error) {
    //   console.error('Error fetching location:', error);
    // }
  }

  async function handleSubmit(cityLat, cityLon) {

    try {
      const API = import.meta.env.VITE_API_URL;
      const url = `${API}/weather?searchQuery=${searchQuery}&lat=${cityLat}&lon=${cityLon}`;
      const weatherResponse = await axios.get(url);
      console.log(weatherResponse);
      setWeather(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function showMovies(searchQuery) {

    try {
      const API = import.meta.env.VITE_API_URL;
      const url = `${API}/movies?searchQuery=${searchQuery}`;
      const moviesResponse = await axios.get(url);
      if (moviesResponse.data) {
        setMovies(moviesResponse.data);
      } else {
        // Handle the case where there is no movie data
        console.log('No movie data available');
      }
    } catch (error) {
      console.error(error);
    }
  }

  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="container mt-4">

      <Header />
      <FormComponent getLocation={getLocation} updateQuery={updateQuery} />
      <LocationCard location={location} />
      <MapImage location={location} />

      {location.latitude && location.longitude && weather && (
        <Weather weather={weather} className="custom-weather" />
      )}

      {movies && <MovieList movies={movies} />}

    </div>
  )
}