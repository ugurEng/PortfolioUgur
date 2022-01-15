import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Projects.css"
import axios from "axios"
import { Link } from 'react-router-dom';





function Projects() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.all([axios.get("http://localhost:5002/coaching"),
           axios.get("http://localhost:5002/commercial")
       ])
     .then(axios.spread((firstResponse, secondResponse) => {  
      //for merge array below code
         var mergeTwoArray = [...firstResponse.data, ...secondResponse.data]
         setPosts(mergeTwoArray)
     }))
      .catch(err => {
        console.log(err)
      })
  }, [])


  return <div>
    <Header></Header>
    adwdad
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

           <div class="container cardgroupmargin ">
            <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-light border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
             </div>

    <div class="container projectsmargin">
      <div  className="row">
        {posts.map(post => (
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
