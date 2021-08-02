import React from "react"
import { Container, Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar className="black-background" bg="dark" variant="dark" expand="lg">
      <Container style={{ padding: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "white", marginBottom: 0}}>
          © Copyright Deepak Ramalingam
        </p>
      </Container>
    </Navbar>
  );
}

export default Footer;