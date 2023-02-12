import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar
        className="w-100 bg-primary d-flex  align-items-center"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container className="px-5">
          <Navbar.Brand as={Link} to="/home" className="logo pe-auto">
            <img className="w-50" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex  align-items-center ">
              <Nav.Link className="text-white pe-auto" as={Link} to="/home">
                Home
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
                  <Nav.Link>
                    {' '}
                    <div class="my-auto dropdown">
                      <p
                        className=" dropdown-toggle my-1"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blogs
                      </p>
                      <ul
                        class="dropdown-menu  "
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="text-white">
                          <Nav.Link
                            as={Link}
                            className="text-black pe-auto text-white"
                            to="/addBlog"
                          >
                            Publish Blog
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link
                            as={Link}
                            className="text-black pe-auto"
                            to="/myBlog/:email"
                          >
                            My Blogs
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link
                            as={Link}
                            className="text-black pe-auto"
                            to="/allBlogs"
                          >
                            All Blogs
                          </Nav.Link>
                        </li>
                      </ul>
                    </div>
                  </Nav.Link>

                  <Nav.Link classname="lh-base  bg-secondary">
                    {' '}
                    <li className="dropdown">
                      <p
                        className="my-2"
                        id="navbarDropdown "
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FaUserCircle className="fs-3 text-white " />
                      </p>
                      <ul
                        class="dropdown-menu  "
                        aria-labelledby="navbarDropdown "
                      >
                        <li className="px-2">
                          <Navbar className="text-primary">
                            Hi! &nbsp;
                            <small className="fs-6 text-secondary fw-bold">
                              {user.displayName
                                ? `${user?.displayName}`
                                : `${user?.email}`}
                            </small>
                          </Navbar>
                        </li>
                        <li className="text-white">
                          <Nav.Link
                            as={Link}
                            className="text-black pe-auto text-white"
                            to="/profile"
                          >
                            Profile
                          </Nav.Link>
                        </li>
                        <li className="text-white">
                          <Nav.Link
                            as={Link}
                            className="text-white pe-auto"
                            to="/home"
                          >
                            <Button
                              onClick={logout}
                              className="bg-primary text-white pe-auto px-5 "
                            >
                              Logout
                            </Button>{' '}
                          </Nav.Link>
                        </li>
                      </ul>
                    </li>
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
