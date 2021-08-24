import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

function App_25() {
  const [alert, setAlert] = useState(false);

  const showAlert = () => {
    alert ? setAlert(false) : setAlert(true);
  };

  return (
    <div>
      <div> Implementing "Card", "Button" & "Alert" from Bootstrap</div>
      {alert ? (
        [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
            <div>
              {/* make it a single btn */}
              <Button variant="primary" onClick={showAlert}>
                "Revert"
              </Button>
            </div>
          </Alert>
        ))
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={showAlert}>
              "Show Alert"
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default App_25;
