import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import { FormattedMessage } from "react-intl";

const Navigation = () => {
  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        data-bs-theme="dark"
        bg="dark"
        className="bg-body-tertiary"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <FormattedMessage id="navigation_1" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <FormattedMessage id="navigation_2" />
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/quotes">
                <Nav.Link>
                  <FormattedMessage id="navigation_3" />
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>
                  <FormattedMessage id="navigation_4" />
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/about">
                <Nav.Link>
                  <FormattedMessage id="navigation_5" />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
