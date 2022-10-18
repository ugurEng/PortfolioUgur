import React from "react";
import './components.css';


function Footer(props) {
    return (
        <div>
            <div class="footer-basic">
                <footer>
                    <div >
                        <a href="/"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/></a>
                        <a href="/"><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></a>
                        <a href="/"><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></a>
                        <a href="/"><img src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-linkedin-social-media-justicon-flat-justicon.png"/></a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/">Home</a></li>
                        <li class="list-inline-item"><a href="/">Services</a></li>
                        <li class="list-inline-item"><a href="/">About</a></li>
                        <li class="list-inline-item"><a href="/">Terms</a></li>
                        <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">Company Name © 2022</p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;



