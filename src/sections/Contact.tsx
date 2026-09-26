import MagneticButton from "../components/MagneticButton";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <h2 className="contact-headline">
          LET&apos;S
          <br />
          BUILD
          <br />
          SOMETHING
          <br />
          USEFUL.
        </h2>

        <div className="contact-panel">
          <div className="contact-links">
            <a
              href="https://github.com/nirbhay131"
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="contact-link"
            >
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">github.com/nirbhay131</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nirbhay-pandey-a14457309/"
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              className="contact-link"
            >
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">nirbhay-pandey</span>
            </a>
            <div className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">your.email@example.com</span>
            </div>
          </div>

          <MagneticButton
            href="mailto:your.email@example.com"
            className="contact-cta"
            cursor="button"
          >
            Start a conversation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
