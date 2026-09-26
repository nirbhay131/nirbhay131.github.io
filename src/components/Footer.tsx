import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">NIRBHAY PANDEY</span>
          <span className="footer-role">Software Developer</span>
        </div>
        <div className="footer-right">
          <span>Built with React + TypeScript</span>
          <span>2026</span>
          <a href="#top" className="footer-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
