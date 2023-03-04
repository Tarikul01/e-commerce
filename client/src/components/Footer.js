import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Built by{" "}
            <a
              href="https://tarikul01.github.io/Portfolio/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Tarikul Islam
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
