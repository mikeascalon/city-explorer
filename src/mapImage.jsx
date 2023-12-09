const API_KEY = import.meta.env.VITE_API_KEY;
import { Image } from 'react-bootstrap';


const MapImage = ({ location }) => {
    return (
        <div>
          {location.latitude && location.longitude && (
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.latitude},${location.longitude}&zoom=12&size=600x400&format=jpg&maptype=street`}
              alt="Map"
              fluid
              className="mt-4"
            />
          )}
        </div>
      );
    };

export default MapImage;