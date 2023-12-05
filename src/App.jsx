import { useState } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
import { Form, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





export default function App() {
  const [location, setLocation] = useState({
    display_name: " ",
    latitude: "",
    longitude: ""
  })
  const [searchQuery, setSearchQuery] = useState('');

  async function getLocation() {
    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`
    console.log(API);
    try {
      const response = await axios.get(API);
      console.log(response.data);
      const { display_name, lat, lon } = response.data[0];
      setLocation({ display_name, latitude: lat, longitude: lon });
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }



  function updateQuery(event) {
    setSearchQuery(event.target.value);
  }


  return (
    <div className="container mt-4">
      <h1>City Explorer</h1> 
      <Form>
        <Form.Group controlId="formSearchQuery">
          <Form.Label>Type a city to explore:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            onChange={updateQuery}
          />
        </Form.Group>
        <Button variant="primary" onClick={getLocation}>
          Explore!
        </Button>
      </Form>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Location Information</Card.Title>
          <Card.Text>
            <strong>City:</strong> {location.display_name} <br />
            <strong>Latitude:</strong> {location.latitude} <br />
            <strong>Longitude:</strong> {location.longitude}
          </Card.Text>
        </Card.Body>
      </Card>
      {location.latitude && location.longitude && (
        <Image
          src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.latitude},${location.longitude}&zoom=12&size=600x400&format=jpg&maptype=street`}
          alt="Map"
          fluid
          className="mt-4"
        />
      )}
    </div>
  )
}