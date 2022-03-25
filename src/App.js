import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Pages/Home';
import Coaching from "./Pages/Coaching";
import Commercial from './Pages/CommercialProjects';
import Login from './Pages/Login';
import AddProject from './Dasboard/AddProject';
import Projects from './Pages/Projects';
import AdminMentoring from './Dasboard/AdminMentoring';
import AdminMERN from './Dasboard/AdminMERN';
import AdminShopify from './Dasboard/AdminShopify';
import ContactUs from './Pages/ContactUs';
import AboutMe from './Pages/AboutMe';
import Services from './Pages/Services';
import Hackernews from './Pages/Hackernews';
import Projectpage from './Pages/Projectpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="1/" exact component={Home}/>
          <Route path="/Projects1.js" exact component={Projects}/>
          <Route path="/Coaching1.js" component={Coaching}/>
          <Route path="/Login.js1" component={Login}/>
          <Route path="/Commercial1.js" component={Commercial}/>
          <Route path="/AddProject1.js" component={AddProject}/>
          <Route path="/AdminMentoring1.js" component={AdminMentoring}/>
          <Route path="/AdminMERN1.js" component={AdminMERN}/>
          <Route path="/AdminShopify1.js" component={AdminShopify}/>
          <Route path="/ContactUs1.js" component={ContactUs}/>
          <Route path="/AboutMe1.js" component={AboutMe}/>
          <Route path="/Services1.js" component={Services}/>
          <Route path="/Hackernews.js" component={Hackernews}/>
          <Route path="/Projectpage1.js/:id" component={Projectpage}/>
        </Switch>
      </div>
    </Router>
  );
}

      
    

export default App;
