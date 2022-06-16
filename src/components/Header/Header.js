import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { ROUTES } from "../../utils/constants";

const Header = ({ onShowModal }) => {
  const { isLoggedIn, logout, userName } = useContext(AuthContext);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ position: "relative", zIndex: 5 }}
    >
      <Container>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to={ROUTES.HOME_PAGE}
              variant="outline-light"
              className="user-select-none"
            >
              Movies Project
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {!isLoggedIn && (
          <Button
            variant="outline-light"
            onClick={onShowModal}
          >
            Login
          </Button>
        )}
        {isLoggedIn && (
          <Button
            variant="outline-light"
            onClick={() => {
              logout(false);
            }}
          >
            <span>Hello, </span>
            <span className="text-decoration-underline">{userName}</span>
            <span>!</span>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
