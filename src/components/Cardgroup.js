import React from "react";
import './components.css';

function Cardgroup(props) {
    return (
        <div>
            <div>
                <div class="row">
                    <div class="aboutimage col-lg-6">
                        <div class="about-img">
                            <img src="https://i.ibb.co/tsTtVv8/modernreact.png" class="img-fluid w-100 rounded" alt="" />
                        </div>
                    </div>
                    <div class="about-content-backround col-lg-6 pt-5 pt-lg-0">
                        <div class="about-content">
                            <h1 className="z" >Latest Modern Frontend</h1>
                            <p className="zx" >We follow the latest technology while building ten terminals. 
                            In particular, I research the technologies applied by 
                            developers and software consultants working in big technology companies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-group card-groupmargin">
                <div class="card">
                    <img class="card-img-top imgsize" src="https://www.spinutech.com/webres/Image/web-design-development/articles/Web%20Dev-Blog.png" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">Customers should not return when they enter the website.
                            In order not to upset the customer and not to limit him, I convert customer-compatible designs into codes.
                            For this reason, it is necessary to know all the stages of web design very well.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZ8_Lqcr8rW35uZtLBIgSlLdNr88giQO8Om3nmwWISVU0FVENTClQmfWzGZ_2ToFzKLs&usqp=CAU" alt="Cardcap" />
                    <div class="card-body">
                        <h5 class="card-title">Best Practice Learning</h5>
                        <p class="card-text">The best learning method is to learn by doing.
                            After taking a quick glance at the theory, it is necessary to immediately go into practice.
                            Remember, we are alone while writing the codes. Just build together with your teammates.</p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/Web-design-vs-web-de.jpg?auto=format&q=60&fit=max&w=930" alt="Card cap" />
                    <div class="card-body">
                        <h5 class="card-title">UI & UX Design|Coding</h5>
                        <p class="card-text"> The first purpose of business life is to make sales. It is necessary to know customer behavior very well in order to make sales.
                            That's why customers need to be satisfied with everything from design to functionality.
                            Therefore, it is necessary to do very good research.</p>
                    </div>
                </div>
            </div>
            <div class="row card-groupmargin">
                <div class="about-content-backroundsecond col-lg-6 pt-5 pt-lg-0">
                    <div class="about-content">
                        <h1 className="z" >CI CD Pipeline</h1>
                        <p className="zx" >The most important step is that the systems we install reach the end user. 
                        However, the affairs do not end there. 
                        The system must be constantly monitored. 
                        That's why we need some principles and steps to manage this process.</p>
                    </div>
                </div>
                <div class="aboutimage col-lg-6">
                    <div class="about-img">
                        <img src="https://i.ibb.co/zXft4bc/cicd.png" class="img-fluid w-100 rounded" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardgroup;











