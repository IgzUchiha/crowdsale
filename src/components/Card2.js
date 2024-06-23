import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../IMG_2063.png";
function Card2() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Aim</Card.Title>
        <Card.Text>
           L2 👨‍🔧 
        </Card.Text>
        <Button href="https://etherscan.io/txs" variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
