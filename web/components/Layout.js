import { Container } from "react-bootstrap";
import Navigation from "./Navigation";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <Container>
        <Navigation />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a href="#">courses</a>
            {" | "}
            <a href="#">github</a>
            {" | "}
            <a href="#">facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Layout;
