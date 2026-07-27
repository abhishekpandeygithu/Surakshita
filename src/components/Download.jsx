import googlePlay from "../assets/google-store.png.webp";
import appStore from "../assets/app-store.png.webp";
import "./Download.css";

import phone from "../assets/phone.png";
function Download() {
  return (
    <section className="download">

<div
  className="downloadLeft"
  data-aos="fade-right"
>
        <p className="tag">
          DOWNLOAD APP
        </p>

        <h2>
          Stay Safe,
          <br />
          Wherever You Go
        </h2>

        <p className="downloadText">
          Download Surakshita and keep emergency
          assistance just one tap away.
        </p>

     <div className="storeButtons">

    <img
        src={googlePlay}
        alt="Google Play"
        className="storeBadge"
    />

    <img
        src={appStore}
        alt="App Store"
        className="storeBadge"
    />

</div>

      </div>

<div
  className="downloadRight"
  data-aos="fade-left"
>
        <img
          src={phone}
          alt="Phone"
          className="phoneImage"
        />

      </div>

    </section>
  );
}

export default Download;