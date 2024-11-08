import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        document.getElementById("hiddenIframe").onload = () => {
            setIsLoading(false);
            navigate("/");
        };
        e.target.submit();
    };

    return (
        <div className='contact-page-wrapper'>
            <div className="contact-page">
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>
                        We’re excited to hear from you! Please fill out the form below,
                        and we’ll get back to you as soon as possible.
                    </p>
                </div>
                
                <form 
                    className="contact-form" 
                    action="https://formsubmit.co/holscherjackson@gmail.com"
                    method="POST"
                    target="hiddenIframe"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="firstName">First Name <span>*</span></label>
                        <input type="text" id="firstName" name="firstName" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name <span>*</span></label>
                        <input type="text" id="lastName" name="lastName" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number (Optional)</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description of Your Business and Goals <span>*</span></label>
                        <textarea id="description" name="description" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </form>

                <iframe 
                    id="hiddenIframe"
                    name="hiddenIframe"
                    style={{display: "none"}}
                />
            </div>


            <div className="footer-contact">
                <hr />
                <div className="footer-title-contact">
                    <p> &copy; JCC Marketing Group, LLC 2024 </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;