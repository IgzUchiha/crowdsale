import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../IMG_2063.png';
function Card2() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Purpose</Card.Title>
        <Card.Text>
          PSI, Whats special about the PSI Token is that it is a Layer 2 Zero Knowledge validator on Ethereums Main Network,
          Users will be able to stream Music, Buy Crypto, NFTs, Concert Tickets, etc

        </Card.Text>
        <Button variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>

    
  );
}

export default Card2;