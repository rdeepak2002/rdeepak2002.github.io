import React from "react"
import { Container, Navbar } from "react-bootstrap"

const Footer = () => {
  return (
    <Navbar className="footer-background" bg="dark" variant="dark" expand="lg">
      <Container style={{ padding: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "black", marginBottom: "1.5rem"}}>
          <strong>© Copyright Deepak Ramalingam</strong>
        </p>
      </Container>
    </Navbar>
  );
}

export default Footer;