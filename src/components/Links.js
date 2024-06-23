import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.png';
function Links() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <img
                alt="logo"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top mx-3"
            />
        <Navbar.Brand href="#home">PSI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://Psichedelic.com">Home</Nav.Link>
            <Nav.Link href="https://etherscan.io/txs">EtherScan</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.coinbase.com/">Coinbase</NavDropdown.Item>
              <NavDropdown.Item href="Psichedelic.com">
                PSI Goal
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/thecrypto.times/">Instagram</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://uniswap.org">
                UniSwap
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Links;