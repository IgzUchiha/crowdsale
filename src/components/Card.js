import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../IMG_2064.jpg';
function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>PSI Token</Card.Title>
        <Card.Text>
          PSI is the native token for Psichedelic however, Psichedelic aims to be the new platform
          to Stream Music , Purchase Tickets to Live Events Layer 2 Solutions and more. Benefitting the Artist and the Streamer.
        </Card.Text>
        <Button variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>

    
  );
}

export default Cards;