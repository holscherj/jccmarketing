import React from 'react';
import './Pricing.css';

function Pricing() {
    return (
        <div className="pricing-page">
            <div className="pricing-header">
                <h1>Our Pricing Plans</h1>
                <p>Choose the right plan that fits your business needs. We offer competitive pricing and high-quality services to help your business succeed.</p>
            </div>

            <div className="pricing-tiers">
                <div className="pricing-tier">
                    <h2>Basic Plan</h2>
                    <p>Perfect for small businesses or startups who need an introduction to digital marketing services.</p>
                    <ul>
                        <li>Social Media Management</li>
                        <li>Email Campaign Setup</li>
                        <li>Monthly Analytics Report</li>
                    </ul>
                    <p className="price">$199/month</p>
                </div>
                <div className="pricing-tier">
                    <h2>Standard Plan</h2>
                    <p>Ideal for growing businesses that are ready to expand their digital presence.</p>
                    <ul>
                        <li>Social Media Management + Ad Campaigns</li>
                        <li>SEO Optimization</li>
                        <li>Monthly Analytics Report & Insights</li>
                    </ul>
                    <p className="price">$499/month</p>
                </div>
                <div className="pricing-tier">
                    <h2>Premium Plan</h2>
                    <p>For established businesses looking for comprehensive marketing solutions.</p>
                    <ul>
                        <li>Full Digital Marketing Management</li>
                        <li>SEO & Content Strategy</li>
                        <li>Custom Ad Campaigns & Reports</li>
                    </ul>
                    <p className="price">$999/month</p>
                </div>
            </div>

            <div className="custom-plan">
                <p>If none of these plans meet your needs, we're happy to discuss a custom plan tailored specifically for your business. Contact us to learn more!</p>
            </div>

            <hr />

            <div className="footer-pricing">
                <div className="footer-title-pricing">
                    <p> &copy; JCC Marketing Group, LLC 2024 </p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;