import "../../assets/css/Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/company/untitled-boston/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/untitled.boston/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@untitledboston"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          YouTube
        </a>
      </div>
    </div>
  );
};

export default Contact;
