import React, { useState, useEffect } from "react";
import axios from "axios"



export default function Hackernews() {

  /* const baseUrl = 'https://hacker-news.firebaseio.com/v0/newstories.json';
   const [news, setNews] = useState([])
 
   useEffect( ()=>{
    axios.get(baseUrl)
    .then(res=> {
      setNews(res.data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])

  console.log(news)

  const getStory = async () => {
   try{const result = await axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`);
    result.data.slice(0, 10).forEach(element =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${element}.json`)
        .then(response => response.json())
        .then(data => console.log(data)));
      }
    catch(err) {
        alert(err);
      }
  };
  getStory()



 /*function getStory(storyId){ 
    fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  news.slice(0, 10).forEach(element =>
    getStory(element))
*/


  return (
    <div>Hackernews</div>
  )
}
