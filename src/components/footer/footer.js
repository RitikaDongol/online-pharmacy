
import {FaRegHospital} from 'react-icons/fa'
import './footercss.css'

const Footer = () => {
    return (
        <section id="footer">
    <div class="footer">
        <div class="container">
            <div class="row">
            <div class="col-md-3 col-sm-3">
                <a href="#" class="head"><FaRegHospital className='e-icon'/> e-Pharma</a>
                <p>Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam
                    eget turpis ornare, euismod ligul aeget, enenatis dui.</p>
            </div>
            <div class="col-md-3 col-sm-3 text-center">
                <h3>Quick Links</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Home</a>
                    </li>
                    <li><a href="#">About Us</a>
                    </li>
                    <li><a href="#">Category</a>
                    </li>
                    <li><a href="#">Contact Us</a>
                    </li>        
                </ul>
            </div>
            <div class="col-md-3 col-sm-3 text-center">
                <h3>Work Times</h3>
                <ul class="list-unstyled">
                    <li><a href="#">Mon-Fri: 8am-8pm</a></li>
                    <li><a href="#">Sat-Sun: 9am-5pm</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-3 text-center">
                <h3>Contact Info</h3>
                <ul class="list-unstyled">
                    <li><a href="#">
                    +977-1-3111849</a></li>
                    <li><a href="#">
                    9831036955</a></li>
                    <li><a href="http://www.whatsapp.com">
                    98911-17578</a></li>
                    <li><a href="http://www.gmail.com">
                    info@ePharma.com</a></li>
            </ul>
            </div>
        </div>
        <div class="row mt-5">
                <div class="col-md-6 col-sm-6">
                    <p>@ 2021 e-Pharma. All rights reserved. Design by 
                        <a href="https://google.com/" target="_blank" class="myname"> Ritika Dongol</a>
                    </p>
                </div>
                <div class="col-md-6 col-sm-6 text-center ps-5 links">
                    <ul class="list-unstyled">
                        <li><a href="#facebook"><span class="fab fa-facebook-f" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="#linkedin"><span class="fab fa-linkedin-in" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="#twitter"><span class="fab fa-twitter" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="#google"><span class="fab fa-google-plus-g" aria-hidden="true"></span></a>
                        </li>
                        <li><a href="#github"><span class="fab fa-github" aria-hidden="true"></span></a>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
    </div>
</section>
    )
}

export default Footer;
