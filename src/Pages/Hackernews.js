import { useState, useEffect } from 'react'
import axios from "axios"

export default function Hackernews() {
  const [newsIDs, setNewsIDs] = useState([])
  const [news, setNews] = useState([])

  async function getNews() {
    const result = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json/');
    return result.data;
  }

  async function singleNews(newsID) {
    const result = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsID}.json`)
    return result.data;
  }

  useEffect(() => {
    getNews().then((res) => {
      setNewsIDs(res)
    });
  }, [])

  useEffect(() => {
    newsIDs.slice(0, 10).forEach((itemID) => {
      singleNews(itemID).then((res) => {
        setNews(prevState => [...prevState, res])
        console.log(res.time)
      })
    })
  }, [newsIDs])


  return (
    <>
      <div class="container">
        <h2>HackerNews App</h2>
        <p>Ugur Sagsoz</p>
        {news.map((item, idx) =>
          <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a data-toggle="collapse" href={"#s" + idx + 1}>{idx + 1}.{item.title}</a>
                </h4>
              </div>
              <div id={"s" + idx + 1} class="panel-collapse collapse">
                <a href={item.url}>Go News</a> | Author: {item.by} |Score:{item.score} |News ID :{item.id}
                |
                <ul class="list-group">
                  <li class="list-group-item">One</li>
                  <li class="list-group-item">Two</li>
                  <li class="list-group-item">Three</li>
                </ul>
                <div class="panel-footer">Footer</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}