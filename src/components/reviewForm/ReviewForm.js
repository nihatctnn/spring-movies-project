// Importing necessary components from the 'react-bootstrap' library
import { Form, Button } from 'react-bootstrap';

// Defining a functional component called ReviewForm that takes in props (handleSubmit, revText, labelText, defaultValue)
const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    
    // Creating a Form component from react-bootstrap
    <Form>

      {/* Creating a Form.Group component with a unique identifier controlId */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

        {/* Displaying a Form.Label component with the labelText received as a prop */}
        <Form.Label>{labelText}</Form.Label>

        {/* Creating a Form.Control component with a reference to revText, as a textarea with 3 rows, and a defaultValue */}
        <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue} />

      </Form.Group>
      {/* Creating a Button component with variant 'outline-info' and an onClick event that triggers the handleSubmit function */}
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
      
    </Form>
  );
}

// Exporting the ReviewForm component as the default export of this module
export default ReviewForm;
