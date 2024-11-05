import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('https://formsubmit.co/jacksonholscher@gmail.com', {
            method: 'POST',
            body: new FormData(e.target),
        })
        .then(response => {
            if (response.ok) {
                navigate('/');
            } else {
                console.error('Form submission failed');
            }
        })
        .catch(error => console.error('Error:', error))
        .finally(() => setIsLoading(false));
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
                
                <form className="contact-form" onSubmit={handleSubmit} >
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
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>

                {isLoading && <div className="loading-spinner"></div>}
            </div>
        </div>
    );
}

export default Contact;