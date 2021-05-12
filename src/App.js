import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={6}>xs=12 md=8</Col>
            <Col xs={12} md={6}>
              xs=6 md=4
            </Col>
          </Row>

          {/* <Row>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
            <Col xs={6} md={4}>
              xs=6 md=4
            </Col>
          </Row>

          <Row>
            <Col xs={6}>xs=6</Col>
            <Col xs={6}>xs=6</Col>
          </Row> */}
        </Container>
      </header>
    </div>
  );
}

export default App;
