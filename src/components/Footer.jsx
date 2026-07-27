import "./Footer.css";

function Footer() {
  return (
<footer data-aos="fade-up">
      <div className="footerTop">

        <div className="footerLogo">
          <h2>🛡 Surakshita</h2>

          <p>
            Empowering women with technology,
            security and instant emergency support.
          </p>
        </div>

        <div className="footerLinks">

          <div>
            <h3>Company</h3>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>

          </div>

          <div>

            <h3>Resources</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>

          </div>

          <div>

            <h3>Contact</h3>

            <p>support@surakshita.com</p>
            <p>+91 9876543210</p>

          </div>

        </div>

      </div>

      <hr />

      <div className="footerBottom">

        © 2026 Surakshita. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;