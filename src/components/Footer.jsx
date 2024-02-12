import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; Tiaro - {date} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
