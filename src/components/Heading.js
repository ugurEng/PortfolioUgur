import React from "react";
import { Link } from 'react-router-dom';
import './components.css';



function Heading(props) {
  return <section className="homepage-projectsection">
    <div className="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-md-4 mb-5 marginright">
          <Link class="underline" to='/Coaching.js'>
            <div class="card border-0 shadow">
              <img class="dd" src="https://i.ibb.co/mqLLcjj/mentoring500350.png" class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Mentoring Projects</h5>
                <div class="card-text card-textcolor ">Web Development</div>
              </div>
            </div>
          </Link>
        </div>

        <div class="col-xl-4 col-md-4 mb-6">
          <Link class="underline" to='/Commercial.js'>
            <div class="card border-0 shadow">
              <img src="https://i.ibb.co/5TkZcBX/mern500350.png" class="card-img-top" alt="..." />
              <div class="card-body text-center backroundhover">
                <h5 class="card-title mb-0">Commercial Projects</h5>
                <div class="card-text card-textcolor">Web Development</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>



  </section>;
}

export default Heading;