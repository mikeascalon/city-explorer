/* eslint-disable react/prop-types */
import { Form, Button } from 'react-bootstrap';



const FormComponent = ({ updateQuery, getLocation }) => {

    
    return (
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
    );
};

export default FormComponent;
