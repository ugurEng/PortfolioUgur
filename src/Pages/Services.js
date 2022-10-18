import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Services.css';




function Services() {
    return (
        <div>
            <div> <Header></Header></div>
            <section class="bg-primary homepage-firstsection">
                <div class="container">
                    <div class="row featurette home-content">
                        <div class="col-md-7">
                            <h2 style={{ color: 'white' }} class="home-text">Easy Web Application Solution</h2>
                            <h2 style={{ color: 'white' }}>Mentoring&Coaching</h2>
                            <p style={{ color: 'white', marginTop: "50px" }} class="lead">Hi there, I am Ugur (Full Stack Front-End Web Developer.
                                I am here to help you
                                I solve web application works of companies with my teammates.
                                I also give private lessons from time to time and solve students' questions.
                                I help them implement it. You can always reach me.</p>
                        </div>
                        <div class="col-md-5">
                            <img className="homepage-graphic" style={{ width: 230, height: 230 }} src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="service-2" class="section-padding pb-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>01</span>
          <h4>Custom <br/>Shopify Project</h4>
          <p class="mb-0">I am setting up private e-commerce sites with suitable budget.I can code the designs you want.</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>02</span>
          <h4>React <br/>Web Application</h4>
          <p class="mb-0">I can prepare web projects with the features you want with my team</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="service-box-2 mb-5">
          <span>03</span>
          <h4>Web <br/>Maintenance</h4>
          <p class="mb-0">I can do regular monthly maintenance, your applications.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section pt-0">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-5 col-sm-12 col-md-6 mb-5 mb-lg-0">
        <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="feature bg" class="img-fluid"/>
      </div>

      <div class="col-lg-7 pl-4">
        <div class="mb-5">
          <h3 class="mb-4">I am creating beautiful <br/>design layout business websites and web aplication</h3>
          <p>We craft beautiful website layout from scratch.You need not to worry about site design and other technial issue.We provide these attractive service as a bonus.Let's have atalk together for your next project.</p>
        </div>

        <ul class="about-list list-unstyled">
          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"></i>Responsive Web Pages</h5>
            <p>Excellent effective design for mobile users</p>
          </li>

          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"> </i> Latest Tech</h5>
            <p>I write my codes in the latest technology for the speed of data.</p>
          </li>

          <li>
            <h5 class="mb-2"><i class="icofont icofont-check-circled"> </i>Shopify eCommerce</h5>
            <p>I can create e-commerce websites in any design you want.</p>
          </li>
          <li>
            <h5 class="mb-2"> <i class="icofont icofont-check-circled"> </i>Maintenance</h5>
            <p>I can fix problems in web applications. I can do regular monthly maintenance.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
            
<Footer/>

        </div>
    )
}

export default Services;

