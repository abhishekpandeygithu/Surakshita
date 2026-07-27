import "./HowItWorks.css";

import {
FaUserPlus,
FaShieldAlt,
FaMapMarkerAlt,
FaBell
} from "react-icons/fa";

function HowItWorks(){

return(

<section className="works">

<h4 data-aos="fade-up">
  HOW IT WORKS
</h4>
<h2
  data-aos="fade-up"
  data-aos-delay="100"
>
  Simple Steps for Your Safety
</h2>
<div className="steps">

<div
  className="step"
  data-aos="zoom-in"
>
<div className="circle">
<FaUserPlus/>
</div>

<h3>01</h3>

<h5>Sign Up</h5>

<p>Create your account in just few seconds.</p>

</div>

<div
  className="step"
  data-aos="zoom-in"
  data-aos-delay="150"
>
<div className="circle">
<FaShieldAlt/>
</div>

<h3>02</h3>

<h5>Set Up Profile</h5>

<p>Add your details and emergency contacts.</p>

</div>

<div
  className="step"
  data-aos="zoom-in"
  data-aos-delay="300"
>
<div className="circle">
<FaMapMarkerAlt/>
</div>

<h3>03</h3>

<h5>Stay Connected</h5>

<p>Share location and stay connected always.</p>

</div>

<div
  className="step"
  data-aos="zoom-in"
  data-aos-delay="450"
>
<div className="circle">
<FaBell/>
</div>

<h3>04</h3>

<h5>Get Help Instantly</h5>

<p>Press SOS and get help instantly.</p>

</div>

</div>

</section>

)

}

export default HowItWorks;