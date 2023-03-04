import React from 'react';
import './contact.css';

const ContactUs = () => {
    return (
        <><div class="contact-us">
            <div class="container">
                <div class="contact-title">
                    <div class="row center">
                        <div class="col-md-6 col-sm-6 ps-5">
                            <p class="ps-5 pt-3">Do you have anything in your mind to let us know? Kindly don't delay to connect to us by means of our contact form.</p>
                        </div>
                        <div class="col-md-6 col-sm-6 ps-5">
                            <h4>Contact Us</h4>
                            <h5 className='fs-6'>Get in Touch</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 text-center pt-5 ps-5">
                            <div class="form-box">
                                <form action="">
                                    <input type="text" class="name" placeholder="Name" required /> <br /> <br />
                                    <input type="email" class="email" placeholder="Email" required /> <br /> <br />
                                    <input type="text" class="phone" placeholder="Phone" required /> <br /> <br />
                                    <textarea name="Message" id="message" placeholder="Message" rows="3" required></textarea> <br /> <br />
                                    <button type="submit"> Send</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 pt-5 ps-5">
                            <div class="contact-box">
                                <div class="info-box">
                                    <div class="info">
                                        <h6>Address</h6>
                                        <p>South Brisbane,Old 4101 India</p>
                                    </div>
                                </div>

                                <div class="info-box">
                                    <div class="info pt-3">
                                        <h6>Phone</h6>
                                        <p>+ 1 (234) 567 8901</p>
                                        <p>+ 1 (234) 555 8901</p>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="info pt-3">
                                        <h6>Email</h6>
                                        <p>info2@e-pharma.com</p>
                                    </div>
                                </div>
                                <div class="info-box">
                                    <div class="info pt-3">
                                        <h6>Opening hours</h6>
                                        <p>Mon-Fri: 8am-8pm</p>
                                        <p>Sat-Sun: 9am-5pm</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
                {/* <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8123741688128!2d153.01420871505263!3d-27.47510002351054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a0835840a2f%3A0xdd5e3f5c208dc0e1!2sMelbourne%20St%2C%20South%20Brisbane%20QLD%204101%2C%20Australia!5e0!3m2!1sen!2snp!4v1625138533047!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div> */}
            
        </>

    )
}

export default ContactUs;
