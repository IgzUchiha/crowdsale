import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../IMG_2324.jpg";
function Card3() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Target</Card.Title>
        <Card.Text>
          ?🎵 ♎︎♌︎
        </Card.Text>
        <Button href="https://soundcloud.com/user-113769786/lord8th-x-liljavi40-a-in-your-head?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" variant="danger">Click Here to Stay Up to Date</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;
