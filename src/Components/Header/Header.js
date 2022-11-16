import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar
        className="w-100 bg-primary"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="logo pe-auto">
            <img className="w-50" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex  align-items-center ">
              <Nav.Link className="text-white pe-auto" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="text-white pe-auto" to="/addBlog">
                {' '}
                Blogs
              </Nav.Link>

              {user?.email ? (
                <div className="d-md-flex  align-items-center">
                  <Nav.Link
                    as={Link}
                    className="text-white pe-auto"
                    to="/myOrder"
                  >
                    MyBookings
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    className="text-white pe-auto"
                    to="/myBlog/:email"
                  >
                    MyBlogs
                  </Nav.Link>

                  <Navbar.Text>
                    Signed in as:{' '}
                    <a href="#login">
                      {user.displayName
                        ? `${user?.displayName}`
                        : `${user?.email}`}
                    </a>
                  </Navbar.Text>
                  <Nav.Link as={Link} className="text-white pe-auto" to="/home">
                    <Button onClick={logout} variant="light">
                      Logout
                    </Button>{' '}
                  </Nav.Link>
                </div>
              ) : (
                <Nav.Link as={Link} className="text-white" to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
