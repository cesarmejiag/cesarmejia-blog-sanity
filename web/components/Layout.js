import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import { useTheme } from "@/providers/ThemeProvider";

const Layout = ({ children, className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme.type}>
      <Container>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
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
      <style jsx global>{`
        html,
        body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}</style>
    </div>
  );
};

export default Layout;
