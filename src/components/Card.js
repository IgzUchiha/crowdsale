import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../IMG_2064.jpg";
function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>PSI Token</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Button variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
