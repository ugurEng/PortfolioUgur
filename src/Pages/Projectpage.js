import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Projects.css"
import { useParams } from "react-router-dom";


const Projectpage = () => {
    const { id } = useParams();
    console.log(id)
    const [posts, setPosts] = useState([])
    useEffect(() => {
      axios.get(`https://portfoliougur.herokuapp.com/coaching/${id}`)
        .then(res => {
          setPosts(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [id])
    console.log(posts)
    return (
      <div>
        <h3>ID: {id}</h3>
        <h3>ID: {posts.projectname}</h3>
        <h3>ID: {posts.projectname}</h3>
        <h3>ID: {posts.projectimage}</h3>
        <h3>ID: {posts.projectselect}</h3>
      </div>
    );
   }

export default Projectpage;
