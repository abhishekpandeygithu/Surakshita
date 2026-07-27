import "./Features.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

<h4 data-aos="fade-up">
  OUR FEATURES
</h4>
<h2 data-aos="fade-up" data-aos-delay="100">
  Safety at Your Fingertips
</h2>
      <p data-aos="fade-up" data-aos-delay="200"></p>
      <div className="featureGrid">

<div
  className="card"
  data-aos="fade-up"
>
          <div className="icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Live Location Sharing</h3>

          <p>
            Share your real-time location with trusted contacts.
          </p>

          <span>Learn More →</span>

        </div>

<div
  className="card"
  data-aos="fade-up"
  data-aos-delay="150"
>
          <div className="icon">
            <FaBell />
          </div>

          <h3>Emergency SOS</h3>

          <p>
            Send instant SOS alerts to your emergency contacts.
          </p>

          <span>Learn More →</span>

        </div>

<div
  className="card"
  data-aos="fade-up"
  data-aos-delay="300"
>
          <div className="icon">
            <FaShieldAlt />
          </div>

          <h3>Nearby Police Stations</h3>

          <p>
            Find nearby police stations and get quick help.
          </p>

          <span>Learn More →</span>

        </div>

<div
  className="card"
  data-aos="fade-up"
  data-aos-delay="450"
>
          <div className="icon">
            <FaPhoneAlt />
          </div>

          <h3>Emergency Contacts</h3>

          <p>
            Quickly call your saved emergency contacts.
          </p>

          <span>Learn More →</span>

        </div>

      </div>

    </section>
  );
}

export default Features;