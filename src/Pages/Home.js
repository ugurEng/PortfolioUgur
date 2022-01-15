import React from "react";
import Cardgroup from "../components/Cardgroup";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import { Wave } from 'react-animated-text';




function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <section class="bg-primary homepage-firstsection">
          <div  className="animationtextsize"> <Wave
           
            text="Hi I`m Ugur"
            effect="stretch"
            effectChange={2}
          /> </div>
         

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
                <img className="homepage-graphic" style={{ width: 350, height: 350 }} src="https://cdn.pixabay.com/photo/2016/06/15/16/16/man-1459246_960_720.png" alt="Logo" />
              </div>
            </div>
          </div>
        </section>
        <Heading />
        <Cardgroup />
      </main>
      <Footer />
    </div>
  )
}


export default Home;