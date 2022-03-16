import React, { useState } from "react";
import Header from "../components/Header";
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {

  const [data, setData] = useState({
    username: "",
    password: "",
  })
  var xx= data.username==="ug.sagsoz@gmail.com" & data.password==="fd$%^&&^%$£rr^%4££"
  function submit(e) {
    e.preventDefault();
    console.log(data.username)
  }

  function userhandle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function passwordhandle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
 if(xx){  
 return(<div>
  <Header></Header>
  <main class="form-signin">
    <form onSubmit={(e) => submit(e)}>
      <img class="mb-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADjElEQVRoge3ay4tcRRQG8N84PRmjUZMZZ4wv0KWowwQjKIgigkSNOEYQEtxqsoohC1352KqgoMw/Imhwo5j4GkeNUaPOGBUSIupGUNS8pF2cutxmMG3fe6t7Gs0Hl4buOl99p09V3VOninMYLoxk5LoIt+I23IyNmExPC7/jJ3yHL/EO9uOXjBpqo4U57MMZtCs+Z/AGHsH4gLWDMezF8Q5RJ/EunsMDmMXVuCC134DrhONP4y2c6LA/njjPH5QTd+Fwh4DD2I31NbjW41F81MF3BPdkUXoWjGG+o8OvsSUj/xYc7OCf14foTOPt1MEfeAJrcneCUTye+mhjEZflIr8K3yfio7gpF3EXzGAp9fkNrm1KOKmcD+/J+O/02PcHSmdq9722g+ggLsmhriIu7NCwqOaceUm5imzMJq06JpXDbL6q8R34S7wbZvPqqoUZ5QLQ80o5LtKINp7qj65a2KOcLz0NsZ3J4FORggwLWkJTWzjVFaPC4zYe6q+uWrhXaPvBv0Tl4dTwK5yXUcB+kYZMN+QZwcdC445uDefwJ7Y17HAlPkydf665M8XQ39dUVB1MCydyOLNBrKanrc67zRQ+Uw7dyxtwFXnf/Rl01UKuyDybOJ7PpKsWckTmwWT/akZdtdA0Mtcr90SrjiaRuTTZ/fxPPx5QvXiQ81ms4Mh4sjlRfJHzpfe/xcqhVWWrMKXL0Bok/hOTvUkkCmyzYvkd9ByZxpu4EV+IDdyPNXhm0ueqRCRHJAoUKcrWDLoqIWfSOKFMGi8+W6M5sTbnTuMX5UvjdyWu17s16tfG6n35NlafCI3buzUcxbLh3epuFdqO6eEY4rHU+JDhKz4cEtp292IwLopybXGOMSzYKzQtqXAodLso0J3Cpv7oqoRZUUto4+6qxi8mw28125Y2xZSyRPVyHYK1ogJfzJc6J1JNsQ4LScOCBueMEyKVaIuq+CCL2VNKJ5Y1X7pdKYZXsextbkrYA2aVw2kZ1+QinhKnsG0x6Z7Un6O3llidiom9IEMkVmIMryi3pku4T55LByOJq3hPFBO7r2fvdyoTwCKd2SPmU1VMiNypSDuKoVR5ia2Llni7Hu0QcErkVC+IpHOT8sLAGnHydEP67RmRip/ssD+WOFflBsSoKFu+JtLqqpWT08l2u4YO5LxUsw63iEs1m3GFqD8Vl2p+E8WCI2Jnd0BE5deMGs5haPA3GCw59MLcbbwAAAAASUVORK5CYII=" alt="" />
      <h1 class="h3 mb-3 fw-normal">Hey Ugur, Sign In</h1>
      <div className="form-floating-div">
        <div class="form-floating ">
          <input onChange={(e) => userhandle(e)} value={data.username} type="email" class="form-control" id="username" placeholder="name@example.com" />
          <label for="username">Email address</label>
        </div>
        <div class="form-floating">
          <input onChange={(e) => passwordhandle(e)} value={data.password} type="password" class="form-control" id="password" placeholder="Password" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
       <Link to='/AddProject.js'>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </Link>

      <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
    </form>
  </main>
</div>)
 }
    return (
      <div>
        <Header></Header>
        <main class="form-signin">
          <form onSubmit={(e) => submit(e)}>
            <img class="mb-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADjElEQVRoge3ay4tcRRQG8N84PRmjUZMZZ4wv0KWowwQjKIgigkSNOEYQEtxqsoohC1352KqgoMw/Imhwo5j4GkeNUaPOGBUSIupGUNS8pF2cutxmMG3fe6t7Gs0Hl4buOl99p09V3VOninMYLoxk5LoIt+I23IyNmExPC7/jJ3yHL/EO9uOXjBpqo4U57MMZtCs+Z/AGHsH4gLWDMezF8Q5RJ/EunsMDmMXVuCC134DrhONP4y2c6LA/njjPH5QTd+Fwh4DD2I31NbjW41F81MF3BPdkUXoWjGG+o8OvsSUj/xYc7OCf14foTOPt1MEfeAJrcneCUTye+mhjEZflIr8K3yfio7gpF3EXzGAp9fkNrm1KOKmcD+/J+O/02PcHSmdq9722g+ggLsmhriIu7NCwqOaceUm5imzMJq06JpXDbL6q8R34S7wbZvPqqoUZ5QLQ80o5LtKINp7qj65a2KOcLz0NsZ3J4FORggwLWkJTWzjVFaPC4zYe6q+uWrhXaPvBv0Tl4dTwK5yXUcB+kYZMN+QZwcdC445uDefwJ7Y17HAlPkydf665M8XQ39dUVB1MCydyOLNBrKanrc67zRQ+Uw7dyxtwFXnf/Rl01UKuyDybOJ7PpKsWckTmwWT/akZdtdA0Mtcr90SrjiaRuTTZ/fxPPx5QvXiQ81ms4Mh4sjlRfJHzpfe/xcqhVWWrMKXL0Bok/hOTvUkkCmyzYvkd9ByZxpu4EV+IDdyPNXhm0ueqRCRHJAoUKcrWDLoqIWfSOKFMGi8+W6M5sTbnTuMX5UvjdyWu17s16tfG6n35NlafCI3buzUcxbLh3epuFdqO6eEY4rHU+JDhKz4cEtp292IwLopybXGOMSzYKzQtqXAodLso0J3Cpv7oqoRZUUto4+6qxi8mw28125Y2xZSyRPVyHYK1ogJfzJc6J1JNsQ4LScOCBueMEyKVaIuq+CCL2VNKJ5Y1X7pdKYZXsextbkrYA2aVw2kZ1+QinhKnsG0x6Z7Un6O3llidiom9IEMkVmIMryi3pku4T55LByOJq3hPFBO7r2fvdyoTwCKd2SPmU1VMiNypSDuKoVR5ia2Llni7Hu0QcErkVC+IpHOT8sLAGnHydEP67RmRip/ssD+WOFflBsSoKFu+JtLqqpWT08l2u4YO5LxUsw63iEs1m3GFqD8Vl2p+E8WCI2Jnd0BE5deMGs5haPA3GCw59MLcbbwAAAAASUVORK5CYII=" alt="" />
            <h1 class="h3 mb-3 fw-normal">Hey Ugur, Sign In</h1>
            <div className="form-floating-div">
              <div class="form-floating ">
                <input onChange={(e) => userhandle(e)} value={data.username} type="email" class="form-control" id="username" placeholder="name@example.com" />
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input onChange={(e) => passwordhandle(e)} value={data.password} type="password" class="form-control" id="password" placeholder="Password" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
          </form>
        </main>
      </div>
    )
  }
  export default Login;
