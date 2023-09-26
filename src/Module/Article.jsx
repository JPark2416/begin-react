import React from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const myStyle = {
  width: "30%",
};

const Article = () => {
  return (
    <Card style={myStyle}>
      <Card.Img
        variant="top"
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1695712064~exp=1695712664~hmac=c9ba0aac1f2d5dcfcc93c955c02f3346a6da2c8b7fd72da91d61ed12ddd912f3"
      />
      <Card.Body>
        <Card.Title>
          Card Title ; Some quick example text to build on the card
        </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Article;
