import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css"
import axios from "axios"
import { Link } from 'react-router-dom';


function Projects() {
  const [commercial, setCommercial] = useState([])
  const [coaching, setCoaching] = useState([])

  useEffect(() => {
    axios.all([axios.get("https://portfoliougur.herokuapp.com/coaching/"),
           axios.get("https://portfoliougur.herokuapp.com/commercial/")
       ])
     .then(axios.spread((firstResponse, secondResponse) => {  
      //for merge array below code
         var mergeTwoArray = [secondResponse.data,firstResponse.data]
         setCommercial(mergeTwoArray[0])
         setCoaching(mergeTwoArray[1])
     }))
      .catch(err => {
        console.log(err)
      })
  }, [])


  return <div>
    <Header></Header>
    <section class="bg-primary homepage-firstsection">
                <div class="container">
                    <div class="row featurette home-content">
                        <div class="col-md-7">
                            <h2 style={{ color: 'white' }} class="home-text">Have a Look My Projects</h2>
                            <p style={{ color: 'white', marginTop: "50px" }} class="lead">I took part in many projects in 3 years. 
                            In these projects, I learned the working logic of the web. 
                            I also helped many students with small projects and had the opportunity to tell them about these projects.</p>
                        </div>
                        <div class="col-md-5">
                            <img className="homepage-graphic" style={{ width: 230, height: 230 }} src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>

           <div class="container cardgroupmargin ">
            <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>FrontEnd and Rest API</h2>
                            <p>As a result of a beautiful design, we need to code this design in the most effective way. But the process doesn't end there.
                               We also need to establish connections with the database. 
                              Here we make this connection with APIs with the help of axios.</p>
            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-light border rounded-3">
                            <h2>Responsive Design</h2>
                            <p>Users can access the site with devices of many different sizes. 
                              For this reason, while carrying the design to codes, codes are written considering all devices.</p>
                        </div>
                    </div>
                </div>
             </div>
    <h1 className="Projects-h1-margin">Commercial Projects</h1>
    <div class="container projectsmargin">
      <div  className="row">
        {commercial.map(post => (
          <div  key={post.id} 
          class="col-xl-3 col-md-6 mb-4">
             <a href={post.projectlink}>
            <div class="card border-0 shadow">
              <img key={post.id} src={post.projectimage} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 key={post.id} class="card-title mb-0">{post.projectname}</h5>
                <div key={post.id} class="card-text text-black-50">{post.projectdesc}</div>
              </div>
            </div>
            </a>
          </div> 
        ))}
      </div>
    </div>
    <h1 className="Projects-h1-margin">Mentoring Projects</h1>
    <div class="container projectsmargin">
      <div  className="row">
        {coaching.map(post => (
          <div  key={post.id} 
          class="col-xl-3 col-md-6 mb-4">
             <a href={post.projectlink}>
            <div class="card border-0 shadow">
              <img key={post.id} src={post.projectimage} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 key={post.id} class="card-title mb-0">{post.projectname}</h5>
                <div key={post.id} class="card-text text-black-50">{post.projectdesc}</div>
              </div>
            </div>
            </a>
          </div> 
        ))}
      </div>
    </div>
     <Footer/>       
  </div>
}

export default Projects;
