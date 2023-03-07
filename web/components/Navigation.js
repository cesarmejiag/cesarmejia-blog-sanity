import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = ({ theme, toggleTheme }) => {
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/" legacyBehavior>
          <a style={{ color: theme.fontColor }}>César Mejía</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <div></div> */}
          <ThemeToggle onChange={toggleTheme} />
          <Nav.Link
            href="/"
            as={() => (
              <Link href="/" legacyBehavior>
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            )}
          ></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
