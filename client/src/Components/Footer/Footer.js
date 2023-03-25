export const Footer = () => {
  return (
    <footer id="footer">
      <div className="contact-us">
        <h2 className="footer-title">CONTACT US</h2>
        <div className="contacts-info">
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>Location</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>john@gmail.com</span>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>(+12 1234456789)</span>
          </div>
        </div>

        <div className="contacts-socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <hr />
      <p className="rights">
        &copy; 2023 All Rights Reserved By Free Html Templates
      </p>
    </footer>
  );
};
