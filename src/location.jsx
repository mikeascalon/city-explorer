
import { Card } from 'react-bootstrap';

const LocationCard = ({location}) => {
    return (
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
);
};


export default LocationCard;