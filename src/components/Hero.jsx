import heroImage from "../assets/hero.png";import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

     <div
  className="heroLeft"
  data-aos="fade-right"
>

    <span className="badge">
        🛡️ Your Safety, Our Priority
    </span>

    <h1>

        Empowering

        <span> Women.</span>

        <br />

        Ensuring Safety.

    </h1>

    <p>

        Surakshita is your trusted safety companion.

        We are here to protect you, anytime, anywhere.

    </p>

    <div className="buttons">

        <button className="primaryBtn">

            Emergency SOS

        </button>

        <button className="secondaryBtn">

            Explore Features →

        </button>

    </div>
    <div className="trust">

    <div className="avatars">

<img
src="https://randomuser.me/api/portraits/women/11.jpg"
alt=""
className="avatar"
/>

<img
src="https://randomuser.me/api/portraits/women/21.jpg"
alt=""
className="avatar"
/>

<img
src="https://randomuser.me/api/portraits/women/31.jpg"
alt=""
className="avatar"
/>

<img
src="https://randomuser.me/api/portraits/women/41.jpg"
alt=""
className="avatar"
/>

</div>
    <div>

        <h3>

            50K+ Women

        </h3>

        <p>

            feel safer with Surakshita

        </p>

    </div>

</div>

</div>
      <div
  className="heroRight"
  data-aos="zoom-in"
>

    <img

        src={heroImage}

        alt="Surakshita Hero"

        className="heroImage"

    />

</div>

    </section>
  );
}

export default Hero;