import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../IMG_2064.jpg";
function Cards() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>PSI</Card.Title>
        <Card.Text>
          ➡️ soon ...
        </Card.Text>
        <Button href="https://etherscan.io/txs" variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
