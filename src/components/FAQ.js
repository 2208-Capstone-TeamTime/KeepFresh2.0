import React from "react";
import { Link } from "react-router-dom";



const FAQ = () => {
    return (
        <>
        <div className="faq">
            <h2>Useful Resources</h2>
            <div className="faq-item">
                <a href='https://www.usda.gov/foodwaste/faqs'> USDA Food Waste FAQs</a>
            </div>
            <div className="faq-item">
                <a href="https://www.hsph.harvard.edu/nutritionsource/sustainability/food-waste/food-waste-home/#:~:text=Storing%20food%20to%20minimize%20waste"> Tips to Minimize Waste</a>
            </div>
            <div className="faq-item">
                <a href="https://www.feedingamerica.org/our-work/reduce-food-waste#:~:text=Each%20year%2C%20108%20billion%20pounds,food%20in%20America%20is%20wasted">Feeding America Fight Against Food Waste</a>
            </div>
        </div>
        <div className="new-feat">
        <h2>Coming Soon ...</h2>
        <ul className="feat-list">
            <li>Get reminders with Google Calendar Integration</li>
            <li>Scan your receipts for faster produce input</li>
            <li>Look for Keep Fresh in your mobile App Store</li>
        </ul>


        </div>
        </>
    )
};

export default FAQ;