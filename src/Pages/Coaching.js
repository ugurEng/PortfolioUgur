import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios  from "axios"



function Mentoring() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("https://portfoliougur.herokuapp.com/coaching/")
    .then(res=> {
      setPosts(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])

 

    return <div> 
    <Header></Header>
  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light" > Mentoring Projects</h1>
        <p class="lead text-muted">The best learning method is to learn by doing. After taking a quick glance at the theory, it is necessary to immediately go into practice. Remember,
         we are alone while writing the codes. Just build together with your teammates.</p>
        <p>
          <a href="/" class="btn btn-primary my-2">Back to Homepage</a>
        </p>
      </div>
    </div>
  </section>
    
  
  <div class="container">
      <div class="row">
        {posts.map(post => (
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
              <img key={post.id} src={post.projectimage} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 key={post.id} class="card-title mb-0">{post.projectname}</h5>
                <div key={post.id} class="card-text text-black-50">{post.projectdesc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  }

  export default Mentoring;
