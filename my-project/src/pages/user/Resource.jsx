import React from "react";
import { Card } from "@tremor/react";

function CARD() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>Card Body</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Card Footer</Card.Text>
      </Card.Footer>
    </Card>
  );
}

export default function Resource() {
  return (
    <div>
      <CARD />
    </div>
  );
}
