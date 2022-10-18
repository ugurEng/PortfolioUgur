import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import axios  from "axios"


function CommercialProjects() {

  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get("https://portfoliougur.herokuapp.com/commercial")
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
        <h1 class="fw-light" > Commercial Projects</h1>
        <p class="lead text-muted">As a result of a beautiful design, we need to code this design in the most effective way. But the process doesn't end there. We also need to establish connections with the database. Here we make this connection with APIs with the help of axios.</p>
        <p>
          <a href="/" class="btn btn-primary my-2">Back to Homepage</a>
        
        </p>
      </div>
    </div>
  </section>
  <div class="album py-5 bg-light">
    <div class="container">
    <div class="container">
      <div class="row">
        {posts.map(post => (
          <div class="col-xl-3 col-md-6 mb-4">
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
    </div>
  </div>
</div>
  }

  export default CommercialProjects;
