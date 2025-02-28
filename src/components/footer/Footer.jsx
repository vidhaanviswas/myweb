// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';
import PopupCard from '../popupcard/PopupCard';

const Footer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility
    const popupRef = useRef(null); // Ref to hold the popup element

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCreditClick = () => {
        setIsPopupOpen(true); // Open the popup when credit text is clicked
    };

    const closePopup = () => {
        setIsPopupOpen(false); // Close the popup
    };

    // Effect to handle clicks outside of the PopupCard
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the clicked target is outside the popup
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <span className="footer-emoji animated-emoji">😜</span>
                </div>
                <div className="footer-center">
                    <p>&copy; 2024 Vidhaan Viswas. All Rights Reserved.</p>
                </div>
                <div className="footer-right">
                    <div className="tooltip">
                        <button className="scroll-top-btn" onClick={scrollToTop} title="Go to Top">▲</button>
                        <span className="tooltip-text">Go to Top</span>
                    </div>
                    <p>
                        Theme by <span className="credit-text" onClick={handleCreditClick}>GregSithole!</span>
                    </p>
                </div>
            </div>
            {isPopupOpen && (
                <div ref={popupRef}>
                    <PopupCard onClose={closePopup} /> {/* Render PopupCard if open */}
                </div>
            )}
        </footer>
    );
};

export default Footer;
