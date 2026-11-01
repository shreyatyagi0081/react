
import Container from 'react-bootstrap/Container';

export const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <div className="footer-content">
          <div>
            <h5 className="footer-brand">
              <span>✓</span> My Todo List
            </h5>
            <p>Stay organized. Stay productive.</p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="#tasks">Tasks</a>
          </div>
        </div>

        <hr />

        <p className="copyright">
          © 2026 My Todo List. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};



