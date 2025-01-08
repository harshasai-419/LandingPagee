import {Component} from 'react'
import './index.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Home extends Component{
    render(){
        return(
            <div>
                <div className='web-top'>
                    <div className="web-top-con">
                        <div className='top-icons-con'>
                            <p><FaPhone /></p>
                            <p className="web-para">9731125090</p>
                        </div>
                        <div className='top-icons-con'>
                            <p><IoMdMail /></p>
                            <p className="web-para">samplemail@gmail.com</p>
                        </div>
                        <div className='top-icons-con'>
                            <p><IoLocation /></p>
                            <p className="web-para">34/A,E Block,2nd stage,Dr.Rajkumar Road,Subramanya Nagar Bangalore-560010</p>
                        </div>
                    </div>
                    <div className='web-top-right-con'>
                        <p className='right-icons'><FaFacebookF /></p>
                        <p className='right-icons'><FaTwitter /></p>
                        
                        <p className='right-icons'><img src="https://tse1.mm.bing.net/th?id=OIP.XHRwkPWrKRT_TmgHnJgBYwHaHa&pid=Api&P=0&h=180" className='indian-flag'/></p>
                    </div>
                </div>

                <div className="second-part">
                    <div className='nav-card-con'>
                        <div className="nav-card">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.3kBnUzvEFqv-Sy2sI2Jl8gHaHa&pid=Api&P=0&h=180" className="build-image"/>
                            <div className="nav-right-item">
                                <p className='nav-item'>Home</p>
                                <p className='nav-item'>About us</p>
                                <p className='nav-item'>Services</p>
                                <p className='nav-item'>Contact us</p>
                            </div>
                        </div>
                    </div>
                    <div className="second-bottom-con">
                        <div>
                            <p className="second-para">GREAT EXPERIENCE IN BUILDING</p>
                            <h1 className="second-head">You Dream<br/>We'll Make It Real</h1>
                            <p>All types of work-from designing and laying the foundations finishing and commissioning.Tight Deadlines Reasonable.</p>
                            <button className='second-button'>contact us</button>
                        </div>
                        <img src="https://thumbs.dreamstime.com/b/happy-builder-8805115.jpg" className='builder-image'/>
                    </div>
                </div>
                 
                <div class="about-us-container">
                    <div class="about-us-image">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.MjYf-zQEeDXwboTxRKRjLwHaEK&pid=Api&P=0&h=180" className="about-image" alt="About us"/>
                    </div>
                    <div class="about-us-content">
                        <h1>About us</h1>
                        <p>
                        Everyone has a vision of their dream home or workspace — a space filled with special features and lasting impressions. At United Buildpro Pvt Ltd, we bring those dreams to life. Even if you’re unsure of what you want, our team of experts knows the right questions to ask to uncover your desires and create a space that’s uniquely yours.
                        </p>
                        <p>
                        Every project we undertake is a harmonious blend of our client’s vision and our design expertise. We focus on creating spaces that not only meet expectations but exceed them, offering a seamless integration of style and functionality.
                        </p>
                        <button class="btn">Know More</button>
                    </div>
                </div>        

                <h1 class="section-title">Our Services</h1>
                <div class="services-container">
                    <div class="service-card">
                        <div class="icon">🏗️</div>
                        <h2>Building Materials</h2>
                        <p>United Buildpro Pvt Ltd's e-commerce platform offers a hassle-free way to source top-quality building supplies from the comfort of your home.</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div class="service-card highlighted">
                        <div class="icon">⚙️</div>
                        <h2>Joint Ventures</h2>
                        <p>United Buildpro Pvt Ltd specializes in fostering successful partnerships through joint development ventures.</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div class="service-card">
                        <div class="icon">🏢</div>
                        <h2>RERA Consultants</h2>
                        <p>Navigating the complexities of real estate transactions is easier with United Buildpro's expert consultants by your side.</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div class="service-card">
                        <div class="icon">🏗️</div>
                        <h2>2D & 3D Consultant</h2>
                        <p>Designing a building starts with a vision, and at United Buildpro, we help you visualize that vision with precision.</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div class="service-card">
                        <div class="icon">⚗️</div>
                        <h2>Construction & Interior</h2>
                        <p>Your dream space deserves the best execution, and that's where United Buildpro Pvt Ltd excels.</p>
                        <a href="#">Read More →</a>
                    </div>
                    <div class="service-card">
                        <div class="icon">🚜</div>
                        <h2>Land Development</h2>
                        <p>At United Buildpro Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services.</p>
                        <a href="#">Read More →</a>
                    </div>
                </div>

                <div className="recent-con">
                    <h1 className='section-title'>Our Recent Projects</h1>
                    <div class="recent-project-con">
                        <div className='recent-project-item'>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.Q-y-k92-93jkcvrgWLhtBQHaEK&pid=Api&P=0&h=180" className='recent-project-image'/>
                            <h1 className="recent-head">Contemporary villas</h1>
                        </div>
                        <div className='recent-project-item'>
                            <img src="http://upload.wikimedia.org/wikipedia/commons/f/fd/Empire_State_Building_ags.JPG" className='recent-project-image'/>
                            <h1 className="recent-head">Empire state building</h1>
                        </div>
                        <div className='recent-project-item'>
                            <img src="https://tse3.mm.bing.net/th?id=OIP.8TvVtXGdOVWXsvhXvv8V5AHaJQ&pid=Api&P=0&h=180" className='recent-project-image'/>
                            <p className="recent-head"> central park tower</p>
                        </div>
                    </div>
                </div>

                <div className='header-image'>
                    <h2 className='work-head'>How We Work</h2>
                    <div className='how-we-work'>     
                        <div class="steps">
                        <div class="step">
                            <h3>01</h3>
                            <h4>Collaborative Design Process</h4>
                            <p>We begin by understanding your vision, creating tailored concepts with 2D/3D visuals and planning.</p>
                        </div>
                        <div class="step highlighted">
                            <h3>02</h3>
                            <h4>Seamless Execution</h4>
                            <p>From construction to interiors, we deliver quality, precision, and timely results to bring your vision to life.</p>
                        </div>
                        <div class="step">
                            <h3>03</h3>
                            <h4>Comprehensive Support</h4>
                            <p>We ensure a smooth handover with regular updates, visual tweaks, and meticulous final touches.</p>
                        </div>
                        </div>
                    </div>
                
                </div>

                <div class="clients-feedback">
                    <h2 className='work-head'>Clients Feedback</h2>
                    <div class="feedbacks">
                    <div class="feedback">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        <span>Lee Barnes</span>
                        <small>SELLING AGENT</small>
                    </div>
                    <div class="feedback highlighted">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        <span>Lee Barnes</span>
                        <small>SELLING AGENT</small>
                    </div>
                    <div class="feedback">
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                        <span>Lee Barnes</span>
                        <small>SELLING AGENT</small>
                    </div>
                    </div>
                </div>

                <div class="contact-us">
                    <h2>Contact Us</h2>
                    <div className='contact-card'>
                        <input placeholder="FIRST NAME*" type="text" className='input-ele'/>
                        <div className='contact-flex-con'>
                            <input placeholder='Mail Address' type="email" className='input-ele'/>
                            <input placeholder='Phone Number' type="phone" className='input-ele'/>
                        </div>
                        <textarea placeholder="Enter Message" className='text-area-con'></textarea>
                        <button className='contact-submitbutton' type="button">Submit Request</button>
                    </div>
                </div>

                <div className='last-con'>
                    <div>
                        <img src="https://tse2.mm.bing.net/th?id=OIP.8VAx_URcmOQKaGfFbwz2UAAAAA&pid=Api&P=0&h=180" className="united-image"/>
                        <p className='last-para'>orparate clients and leisure travelers<br/> hasbeen relying on groundlink </p>
                        <div className='icons-con'>
                            <p className='icons-para'><FaFacebookF /></p>
                            <p className='icons-para'><FaTwitter /></p>
                            <p className='icons-para'><FaLinkedin /></p>
                        </div>
                    </div>
                    <div>
                        <h1 className='last-head'>Useful Links</h1>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Contact us</p>
                    </div>
                    <div>
                        <h1 className='last-head'>Products</h1>
                        <p>Listings</p>
                        <p>Details</p>
                        <p>Enquiry Form</p>
                    </div>
                    <div>
                        <h1 className='last-head'>Contact</h1>
                        <p>9912991220</p>
                        <p>samlemail@gmail.com</p>
                        <p>32-2,E-block,Gandhi Nagar</p>
                    
                    </div>
                </div>

            </div>
        )
    }
}

export default Home
